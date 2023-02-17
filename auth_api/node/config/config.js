import { config } from "dotenv";

config()

export const dbConfig = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
};

export const appConfig = {
    secret: process.env.APP_SECRET,
    port: process.env.APP_PORT,
    tokenExpiry: process.env.TOKEN_EXPIRY
}