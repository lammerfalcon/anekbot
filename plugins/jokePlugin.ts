import axios from "axios";
import * as cron from "node-cron";
import { openai } from "../openAi";

export default defineNitroPlugin(async () => {
    await axios.post(process.env.DISCORD_WEBHOOK, {
        content: 'init plugin',
    });
    async function getJoke() {
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: 'get joke start',
        });
        const prompt =
            "Напиши анекдот про разработчиков(про бекендера или фронтендера или девопса или тестировщкиа или всех вместе или по парам, без разницы, тематика шутко должна быть про разработку )(ищи анекдоты которые хорошо транспонируются на русский язык - твой перевод не всегда корректно на русской речи выглядит)";
        const maxTokens = 1000;
        const temperature = 1;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: maxTokens,
            temperature: temperature,
            n: 1,
        });
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: 'joke getted',
        });
        const joke = "```" + response.data.choices[0].text.trim() + "```";
        return joke;
    }

    const getAndSendJoke = async () => {
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: 'inside get and send joke',
        });
        await getJoke().then((joke) => {
            axios.post(process.env.DISCORD_WEBHOOK, {
                content: 'joke sended',
            });
            axios.post(process.env.DISCORD_WEBHOOK, {
                content: joke,
            });
        });

    };
    getAndSendJoke();
setInterval(getAndSendJoke, 1000 * 60);
});
