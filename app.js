const express = require('express');
const axios = require('axios');
const cron = require('node-cron');

const app = express();

const sendDiscordMessage = async (message) => {
    try {
        await axios.post('https://discord.com/api/webhooks/1089610761585819739/o96xVqP5wjvJRJL3H9S8PLNldnl0FTqBtps9i9Nc2-n3jkl2Uuy5QSeOQk1MdTeYVXlT', { content: message });
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
setInterval(() => {
    axios.get('http://localhost:3000/send-message')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Ошибка при выполнении задачи:', error);
        });
}, 10000)
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
