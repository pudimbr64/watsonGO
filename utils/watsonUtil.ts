import dotenv from 'dotenv';

dotenv.config();


const watson = {
    url: process.env.WATSON_URL,
    apiKey: process.env.WATSON_API_KEY
}


export default watson;