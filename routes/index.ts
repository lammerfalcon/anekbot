import axios from "axios";
import {Configuration, OpenAIApi} from "openai";

export default eventHandler(async () => {

    // const configuration = new Configuration({
    //     apiKey: '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',
    //     organization: 'org-1S8O9yE2FnV3NdDqMcRUlxfg',
    // });
    // const openai = new OpenAIApi(configuration);
    // async function getJoke() {
    //     const prompt = "Напиши анекдот про разработчиков"; // Начальный текст для получения анекдота
    //     const maxTokens = 1000; // Максимальное количество токенов в ответе (длина анекдота)
    //     const temperature = 0.7; // Коэффициент разнообразия (чем выше, тем более случайный будет ответ)
    //
    //     const response = await openai.createCompletion({
    //         model: 'text-davinci-003',
    //         prompt: prompt,
    //         max_tokens: maxTokens,
    //         temperature: temperature,
    //         n: 1,
    //     });
    //     return '```' + response.data.choices[0].text.trim() + '```';
    // }
    // const joke = await getJoke();
    // axios.post('https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT', {
    //     content: joke
    // })
    axios.post('https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT', {
        content: 'test'
    })
  return { status: 200, message: 'test' }
})
