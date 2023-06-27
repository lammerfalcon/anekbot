import axios from "axios";

export default eventHandler(async () => {
  const url = 'https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT'

  axios.post(url, {
    content: 'test',
  })
  return {
    statusCode: 200,
    body: 'Анекдоты успешно отправляются в Discord.',
  };
})
