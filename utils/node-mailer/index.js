import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import ejs from "ejs";
import { __dirname } from "../../app.js";

const {
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_SENDER_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
  refresh_token: GOOGLE_REFRESH_TOKEN,
});

export const sendEmail = async (to, subject, html) => {
  const accessToken = await oauth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GOOGLE_SENDER_EMAIL,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  transport.sendMail({ to, subject, html });
};

export const getHTML = (filename, data) => {
  return new Promise((resolve, reject) => {
    const path = `${__dirname}views/template/${filename}`;

    ejs.renderFile(path, data, (err, html) => {
      if (err) {
        return reject(err);
      }

      return resolve(html);
    });
  });
};
