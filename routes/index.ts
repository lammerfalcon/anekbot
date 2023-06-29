import axios from "axios";

export default eventHandler(async () => {
    const joke = await useStorage().getItem('joke')
        await axios.post(process.env.DISCORD_WEBHOOK, {
            content: 'Анекдот не найден'
        })
  return { status: 200, message: {text: 'Анекдот отправлен'} }
})
