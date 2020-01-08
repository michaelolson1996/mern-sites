const lib = require('../index');
lib.dotenv.config();
const { google } = lib.google;
const OAuth2 = google.auth.OAuth2;
const nodemailer = lib.nodemailer;

const sendForm = (req, res) => {
    const client = req.body;
    let mailOptions = {
        from: `client email address: ${client.email}`,
        to: 'michael.olson.cmx@gmail.com',
        subject: 'HandClasp Contact Form Message',
        text: `client name: ${ client.name }
               client massage: ${ client.message } 
               client phone: ${ client.phone }
               client subject: ${client.subject}
               client email: ${ client.email }
               current time: ${ new Date() }` 
      }

      const oauth2Client = new OAuth2(
        process.env.GMAIL_ID,
        process.env.GMAIL_SECRET,
        process.env.G_AUTH_URL
      );

      oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_RT
      });

      async function getAccessToken() {
        const tokens = await oauth2Client.getRequestHeaders().catch((err) => {
            if (err) {
                console.log('access token err')
            }
            return
        })
        const accessToken = tokens
        return accessToken
      }

      getAccessToken().then( accessToken => {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.HC_EMAIL,
            clientId: process.env.GMAIL_ID,
            clientSecret: process.env.GMAIL_SECRET,
            refreshToken: process.env.GMAIL_RT,
            accessToken: accessToken
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                return res.status(200).send({ success: false });
            } else {
                return res.status(200).send({success: true});
            };
          });
          transporter.close()
        }).catch((err) => {
          console.log(err);
        });
        return res.status(200).send({ success: true });
};

module.exports = sendForm;