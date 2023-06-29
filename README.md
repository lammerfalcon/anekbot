# Anekbot

## Description

This is a Nitro application that generates jokes using the ChatGPT model from OpenAI and sends them to a specified Discord channel. The application uses the Discord Webhook for sending messages and the OpenAI API for generating jokes.

## How to Use

1. Clone the repository
```bash
git clone git@github.com:lammerfalcon/anekbot.git
```

2. Install the dependencies
```bash
npm install
```

3. Create a `.env` file at the root of the project and populate it as follows:
```bash
OPEN_API_KEY=<your OpenAI API key>
OPEN_API_ORGANIZATION=<your OpenAI organization ID>
DISCORD_WEBHOOK=<your Discord Webhook>
NITRO_PRESET=digital-ocean
```
Important! Do not share your keys and tokens with others. Keep them safe!

4. Start the application
```bash
npm run start
```

## Cloud Deployment

For cloud deployment, we recommend using `digital-ocean` as specified in the `NITRO_PRESET` environment variable.

## Contributing

You can contribute to the development of the project by submitting a pull request or opening an issue.

## License

no license
