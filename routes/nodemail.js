const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/email", (req, res, next) => {

    let resObject = {
        message: "Thanks for choosing Zip Delivery! Check your email for your quote."
    }
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'brendon.wanderlust@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'ZipDelivery by Brendon Carrasquillo', // Subject line
        text: req.body.message + '. Thanks for stopping by Digital Crafts Demo Day! Checkout my LinkedIn profile: https://www.linkedin.com/in/brendoncarrasquillo. Check out my GitHub profile too: https://github.com/brendonwanderlust.', // plain text body
        html: req.body.message + '. Thanks for stopping by Digital Crafts Demo Day! Checkout my LinkedIn profile: https://www.linkedin.com/in/brendoncarrasquillo. Check out my GitHub profile too: https://github.com/brendonwanderlust.' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.json(resObject);
    });

});

module.exports = router;