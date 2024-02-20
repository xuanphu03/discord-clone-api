import { MAIL_FROM, MAIL_TRANSPORT } from "@/utils/constants";
import * as nodemailer from 'nodemailer'

interface SendMailOptions {
  to: string;
  html: string;
  subject: string;
}

class MailService {
  private transport: nodemailer.Transporter;
  constructor() {
    if (!MAIL_TRANSPORT) throw new Error("MAIL_TRANSPORT is not defined");
    this.transport = nodemailer.createTransport(MAIL_TRANSPORT);
  }

  sendMail({ to, html, subject }: SendMailOptions) {
    return this.transport.sendMail({
      from: `"No Reply" ${MAIL_FROM}>`,
      to: to,
      subject: subject,
      html: html,
    });
  }
}

export const mailService = new MailService();