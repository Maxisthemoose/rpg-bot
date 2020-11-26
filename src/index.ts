import { Intents } from "discord.js";
import Client from "./util/Base/Client";
new Client({
    prefix: "rpg",
    token: process.env.TOKEN,
    owners: "408080307603111936",
    Base: {
        ws: {
            intents: Intents.ALL
        }
    }
}).start();