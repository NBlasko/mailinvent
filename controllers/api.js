
/* helpers */
const sendEmail = require('../helpers/mailHelpers')


module.exports = {

    index: async (req, res, next) => {
        //  console.log("stigao u index");
        return res.status(200).json({ message: "ping!" })
    },
    newMail: async (req, res, next) => {
        const { email, name, description } = req.value.body;

        /*sendEmail(to, name, code)  */
      //  console.log("stigao u newMailpost", req.value.body)
        const result = await sendEmail(email, name, description);
      //  console.log("result", result)
        return res.status(200).json({ message: "Your message is successfully sent." })
    },


}
