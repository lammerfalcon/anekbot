import axios from "axios";
import {Configuration, OpenAIApi} from "openai";
import * as cron from "node-cron";

export default defineNitroPlugin(async () => {
    const configuration = new Configuration({
        apiKey: process.env.OPEN_API_KEY,
        organization: process.env.OPEN_API_ORGANIZATION,
    });
    const openai = new OpenAIApi(configuration);
    async function getJoke() {
        const prompt = "Напиши анекдот про разработчиков(про бекендера или фронтендера или девопса или тестировщкиа или всех вместе или по парам, без разницы, тематика шутко должна быть про разработку )"; // Начальный текст для получения анекдота
        const maxTokens = 1000; // Максимальное количество токенов в ответе (длина анекдота)
        const temperature = 1; // Коэффициент разнообразия (чем выше, тем более случайный будет ответ)

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: temperature,
            n: 1,
        });
        return '```' + response.data.choices[0].text.trim() + '```';
    }
    const getAndSendJoke = async () => {
        const joke = await getJoke();
        await useStorage().setItem('joke',  joke )
        await axios.get('http://localhost:3000/')
    }
    cron.schedule('* * * * *', async () => {
        await getAndSendJoke()

    })
})
