const express = require('express');
const router = express.Router();
const axios = require("axios");
// const querystring = require("querystring");
const nodemailer = require('nodemailer');

router.post("/email", (req, res, next) => {

    console.log(req.body.message);

    let resObject = {
        message: "Thanks for choosing Zip Delivery! Check your email for your quote."
    }

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <brendon.wanderlust@gmail.com>', // sender address
            to: 'brendon.wanderlust@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: req.body.message, // plain text body
            html: req.body.message // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.json(resObject);

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });

    });

});    

            module.exports = router;