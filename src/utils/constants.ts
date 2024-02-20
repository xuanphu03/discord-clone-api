import dotenv from 'dotenv'

dotenv.config();

export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
export const MAIL_FROM = process.env.MAIL_FROM;
