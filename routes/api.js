const express = require('express');
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");

router.get('/', (req, res) => {
    res.send('hello world');
})

router.get("/search", (req, res) => {

    let parsedRequest = querystring.parse(req);

    // Build the Google Distance Matrix API search query
    let origin = ["Atlanta"]; //[`${parsedRequest.origin}`]; 
    let destination = ["Seattle"]; //[`${parsedRequest.destination}`]; 
    let googleSearchQuery = querystring.stringify({
        origins: origin,
        destinations: destination,
        travelMode: 'DRIVING',
        key: process.env.GOOGLE_API_KEY
    });

    googleSearchQuery =
        "https://maps.googleapis.com/maps/api/distancematrix/json?" +
        googleSearchQuery;

    console.log("Your Query String is: " + googleSearchQuery);

    // Search Google for the distances and then convert
    // the distance from meters to miles. 
    axios
        .get(googleSearchQuery)
        .then(response => {
            console.log("Distance in km = " + response.data.rows[0].elements[0].distance.text);
            
            function LengthConverter(valNum) {
                return valNum*0.000621371;
            }
            let distanceInMiles = LengthConverter(response.data.rows[0].elements[0].distance.value);
            
            console.log("The distance in miles = " + distanceInMiles);
            
            wagePerMile = .30;
            suggestedProfitMargin = 1.3;
            wageExpense = wageExpense * distanceInMiles;
            milesPerGallon = 7.75;
            fuelCostPerGallon = 3.00;
            fuelExpense = (distanceInMiles / milesPerGallon) * fuelCostPerGallon;
            let quote = (wageExpense + fuelExpense) * suggestedProfitMargin;
            res.json(quote)
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