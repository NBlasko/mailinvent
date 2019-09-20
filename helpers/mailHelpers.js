/*  sendgrid library to send emails  */
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.API_KEY_SENDGRID);

const sendEmail = async (email, name, description) => {

   // console.log("mail about to send, sendgrid")
    //Sendgrid Data Requirements
    const msg = {
        to: process.env.MY_MAIL,
        from: email,
        subject: "Message from Mailinvent",
        html: `<h2> From ${name},  </h2>
        <p> Email: ${email} </p>    
        <p> Description: ${description} </p>    
        `,

    }

    //Send Email
    const result = await sgMail.send(msg);
    // console.log("result sendgrid", result)
    return result;

}


module.exports = sendEmail;