import { Message } from "discord.js";
import BaseClient from "../../util/Base/Client";
import Command from "../../util/Base/Command";

export default class UserInfo extends Command {
    constructor() {
        super({
            aliases: ["ui"],
            category: "general",
            description: "Get information on your profile",
            name: "userinfo",
            permissions: ["SEND_MESSAGES"],
            usage: "userinfo [user]",
        });
    }
    async run(client: BaseClient, message: Message, args: string[]) {

    }
}