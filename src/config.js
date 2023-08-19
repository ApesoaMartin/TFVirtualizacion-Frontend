import {config} from 'dotenv'

console.log(config());

export const APP_PORT = process.env.FE_PORT || 80;
export const BE_HOST = (process.env.BE_HOST) ? ('http://'+process.env.BE_HOST): '/';