import axios from "axios";
import * as cron from "node-cron";

export default defineNitroPlugin(async (nitroApp) => {
    cron.schedule('* * * * *', async () => {
        axios.get('http://localhost:3000/')
    })
})
