const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();

const joke = ''
const getJoke = async () => {
    try {
        const response = await axios.get('https://backend-omega-seven.vercel.app/api/getjoke\n');
        this.joke = `\nJOKE! \n Question:\n——${response.data[0].question}\nAnswer:\n——${response.data[0].punchline}`;
    } catch (error) {
        console.error('Ошибка при получении шутки:', error);
    }
}
const sendDiscordMessage = async () => {
    try {
        await getJoke();
        await axios.post('https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT', { content: this.joke });
        console.log('Сообщение успешно отправлено в Discord');
    } catch (error) {
        console.error('Ошибка при отправке сообщения в Discord:', error);
    }
};

app.get('/send-message', (req, res) => {
    const message = 'Привет, Discord!';
    sendDiscordMessage(message);
    res.send('Сообщение отправлено в Discord');
});
cron.schedule('* * * * *', () => {
    axios.get('http://localhost:3000/send-message')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Ошибка при выполнении задачи:', error);
        });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
