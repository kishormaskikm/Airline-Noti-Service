const express = require('express');

const { ServerConfig } = require('./config');
const mailSender = require("./config/email-config");
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    try {
        const response = await mailSender.sendMail({
            from: ServerConfig.GMAIL_EMAIL,
            to:'kishormaski28@gmail.com', // Change this email address accordingly
            subject: 'Test Email Subject',
            text: `This is a test message sent by Nodemailer using Gmail SMTP`,
        });
        console.log(response);

    } catch (error) {
        console.log(error);
    }
});
