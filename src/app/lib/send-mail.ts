"use server";

import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;

console.log("SMTP_SERVER_HOST", SMTP_SERVER_HOST);
console.log("SMTP_SERVER_PORT", SMTP_SERVER_PORT);
console.log("SMTP_SERVER_USERNAME", SMTP_SERVER_USERNAME);
console.log("SMTP_SERVER_PASSWORD", SMTP_SERVER_PASSWORD);
console.log("SITE_MAIL_SENDER", SITE_MAIL_SENDER);

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: SMTP_SERVER_PORT ? parseInt(SMTP_SERVER_PORT) : 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME || "",
    pass: SMTP_SERVER_PASSWORD || "",
  },
});

export async function sendMail({
  sendTo = "info@plexvans.com",
  subject,
  text,
  html,
}: {
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
    console.log("Server is ready to take our messages", isVerified);
  } catch (error) {
    console.log("Error verifying server >>>", error);

    return;
  }
  const info = await transporter.sendMail({
    from: "info@plexvans.com",
    to: sendTo,
    subject: subject,
    text: text,
    html: html ? html : "",
  });
  console.log("Message Sent", info.messageId);
  return info;
}
