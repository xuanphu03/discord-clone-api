import dotenv from 'dotenv';

dotenv.config();

export const API_URL = process.env.API_URL;
export const WEB_URL = process.env.WEB_URL;
export const MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
export const MAIL_FROM = process.env.MAIL_FROM;
export const JWT_SECRET = process.env.JWT_SECRET;
