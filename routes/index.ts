import axios from "axios";
import {Configuration, OpenAIApi} from "openai";

export default eventHandler(async () => {

    const configuration = new Configuration({
        apiKey: process.env.OPEN_API_KEY,
        organization: process.env.OPEN_API_ORGANIZATION,
    });
    const openai = new OpenAIApi(configuration);
    async function getJoke() {
        const prompt = "Напиши анекдот про разработчиков"; // Начальный текст для получения анекдота
        const maxTokens = 1000; // Максимальное количество токенов в ответе (длина анекдота)
        const temperature = 0.7; // Коэффициент разнообразия (чем выше, тем более случайный будет ответ)

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: temperature,
            n: 1,
        });
        return '```' + response.data.choices[0].text.trim() + '```';
    }
    const joke = await getJoke();
    axios.post(process.env.DISCORD_WEBHOOK, {
        content: joke
    })
  return { status: 200, message: joke }
})
