const { TicketRipository } = require("../repositories");
const { MAILER } = require("../config");

const ticketRepo = new TicketRipository();


async function sendEmail(mailTo , mailFrom , subject , text){
    try {
        const response = await MAILER.sendMail({
            to : mailTo,
            from : mailFrom,
            subject:subject,
            text : text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data){
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingEmails(){
    try {
        const response = await ticketRepo.getPendingTicket();
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}