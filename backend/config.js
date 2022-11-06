import { config } from 'dotenv';
config();

const { APP_PORT, DB_URL, DEBUG_MODE } = process.env;

export { APP_PORT, DB_URL, DEBUG_MODE };
