import axios from "axios";
import {nitroPlugin} from "#imports";

export default eventHandler(async () => {
    const joke = await useStorage().getItem('joke')
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: 'test'
        })
  return { status: 200, message: {text: 'Анекдот отправлен'} }
})
