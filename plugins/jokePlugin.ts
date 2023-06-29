import axios from "axios";
import * as cron from "node-cron";
import { openai } from "../utils/openAi";

export default defineNitroPlugin(async () => {
    async function getJoke() {
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: 'system', content:
                    'Анекдот дня про разработчиков'
            }],
            temperature: 0.2,
            max_tokens: 500,
        });

        const joke = "```" + chatCompletion.data.choices[0].message.content + "```";
        return joke;
    }

    const getAndSendJoke = async () => {
        await getJoke().then((joke) => {

            axios.post(process.env.DISCORD_WEBHOOK, {
                content: joke,
            });
        });

    };
    cron.schedule("0 10 * * 1-5", getAndSendJoke);
    getAndSendJoke();
});
