const express = require('express');
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");

router.get("/search", (req, res) => {

    // Build the Google Distance Matrix API search query
    let origin = [`${req.query.originLocation}`];
    let destination = [`${req.query.destinationLocation}`];
    let googleSearchQuery = querystring.stringify({
        origins: origin,
        destinations: destination,
        travelMode: 'DRIVING',
        key: process.env.GOOGLE_API_KEY
    });

    console.log(origin, destination);

    googleSearchQuery =
        "https://maps.googleapis.com/maps/api/distancematrix/json?" +
        googleSearchQuery;

    console.log("Your Query String is: " + googleSearchQuery);

    // Search Google for the distances and then convert
    // the distance from meters to miles. 
    axios
        .get(googleSearchQuery)
        .then(response => {
            // console.log(response);
            console.log("Distance in km = " + response.data.rows[0].elements[0].distance.text);

            function LengthConverter(valNum) {
                return valNum * 0.000621371;
            }
            let distanceInMiles = LengthConverter(response.data.rows[0].elements[0].distance.value);

            console.log("The distance in miles = " + distanceInMiles);

            function quote() {
                let quote = 0
                let wagePerMile = .30;
                let wageExpense = wagePerMile * distanceInMiles;
                let milesPerGallon = 7.75;
                let fuelCostPerGallon = 3.00;
                let fuelExpense = (distanceInMiles / milesPerGallon) * fuelCostPerGallon;
                let margins = [1.3, 1.5, 1.7, 1.9]

                function costPlusQuote() {
                    if (distanceInMiles >= 100) {
                        quote = (wageExpense + fuelExpense) * margins[3];
                        return quote
                    } else if (distanceInMiles >= 500) {
                        quote = (wageExpense + fuelExpense) * margins[2];
                        return quote
                    } else if (distanceInMiles >= 1000) {
                        quote = (wageExpense + fuelExpense) * margins[1];
                        return quote
                    } else {
                        quote = (wageExpense + fuelExpense) * margins[0];
                        return quote
                    }
                }

                if (distanceInMiles < 20) {
                    quote = 69.98
                    return quote
                } else if (distanceInMiles < 40) {
                    quote = 99.98
                    return quote
                } else if (distanceInMiles < 60) {
                    quote = 129.98
                    return quote
                } else if (distanceInMiles < 100) {
                    quote = 179.98
                    return quote
                } else if (distanceInMiles >= 100) {
                    quote = costPlusQuote()
                    return quote
                }
            }


            let roundedQuote = Math.round(quote() * 100) / 100;
            res.json(roundedQuote)
        })
        .catch(error => {
            console.log(error);
            res.json({
                status: "error",
                message: "Location information"
            });
        });
});

module.exports = router;