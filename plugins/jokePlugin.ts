import axios from "axios";
import * as cron from "node-cron";
import {openai} from "../openAi";

export default defineNitroPlugin(async () => {

    // async function getJoke() {
    //     const prompt = "Напиши анекдот про разработчиков(про бекендера или фронтендера или девопса или тестировщкиа или всех вместе или по парам, без разницы, тематика шутко должна быть про разработку )(ищи анекдоты которые хорошо транспонируются на русский язык - твой перевод не всегда корректно на русской речи выглядит)"; // Начальный текст для получения анекдота
    //     const maxTokens = 1000; // Максимальное количество токенов в ответе (длина анекдота)
    //     const temperature = 1; // Коэффициент разнообразия (чем выше, тем более случайный будет ответ)
    //
    //     const response = await openai.createCompletion({
    //         model: 'text-davinci-003',
    //         prompt: prompt,
    //         max_tokens: maxTokens,
    //         temperature: temperature,
    //         n: 1,
    //     });
    //     console.log('inside')
    //     const joke = '```' + response.data.choices[0].text.trim() + '```';
    //     useStorage().setItem('joke',  joke )
    //     return '```' + response.data.choices[0].text.trim() + '```';
    // }
    // const getAndSendJoke = async () => {
    //     console.log('here')
    //     await getJoke();
    //     await axios.get('http://localhost:3000/')
    // }
    setInterval( () => {
        axios.get('http://localhost:3000/')
    }, 5000)
    // cron.schedule('* * * * *', async () => {
    //     // await getAndSendJoke()
    //     await useStorage().setItem('joke',  Math.random().toString() )
    //     await axios.get('http://localhost:3000/')
    //
    // })
})
