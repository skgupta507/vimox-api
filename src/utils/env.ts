import dotenv from 'dotenv-flow';

dotenv.config();

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const SECRET_JWT = process.env.SECRET_JWT;
export const SECRET_REFRESH_JWT = process.env.SECRET_REFRESH_JWT;
export const SECRET_RESET_PASSWORD = process.env.SECRET_RESET_PASSWORD;
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
export const ORIGIN_CLIENT = process.env.ORIGIN_CLIENT;
