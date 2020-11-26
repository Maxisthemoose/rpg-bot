import { Message } from "discord.js";
import BaseClient from "../../util/Base/Client";
import Command from "../../util/Base/Command";

export default class Help extends Command {
    constructor() {
        super({
            aliases: ["halp"],
            category: "general",
            description: "Get some help with the bot.",
            name: "help",
            permissions: ["SEND_MESSAGES"],
            usage: "help"
        });
    }

    async run(client: BaseClient, message: Message, args: string[]) {

    }
}