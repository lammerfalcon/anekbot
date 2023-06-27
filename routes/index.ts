import * as cron from 'node-cron'
import axios from 'axios'

export default eventHandler(async () => {
  const url = 'https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT'

  cron.schedule('* * * * *', () => {
    getJoke().then((res) => {
      axios.post(url, {
        content: res,
      })
    })
  });
const getJoke = async () => {
    const response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke').then(res => res.json())
    const joke = response[0];
    const question = joke.question;
    const punchline = joke.punchline;

  return `\n \n Question: ${question}\nPunchline: ${punchline}`
}
  return {
    statusCode: 200,
    body: 'Анекдоты успешно отправляются в Discord.',
  };
})
