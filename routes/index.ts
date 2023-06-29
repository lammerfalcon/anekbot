import axios from "axios";

export default eventHandler(async () => {
    const joke = await useStorage().getItem('joke')
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: joke
        })
  return { status: 200, message: {text: 'Анекдот отправлен'} }
})
