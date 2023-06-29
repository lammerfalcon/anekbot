import axios from "axios";

export default eventHandler(async () => {
  return { status: 200, message: {text: 'Анекдот отправлен'} }
})
