import axios from "axios";
import * as cron from "node-cron";

export default defineNitroPlugin(async (nitroApp) => {
    cron.schedule('0 * * * *', async () => {
        axios.get('http://localhost:3000/')
    })
})
