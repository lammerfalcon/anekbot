import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
    organization: process.env.OPEN_API_ORGANIZATION,
});
export const openai = new OpenAIApi(configuration);
