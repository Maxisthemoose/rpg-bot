import BaseClient from "../util/Base/Client";
import Event from "../util/Base/Event";

export default class Ready extends Event {
    constructor() {
        super({
            event: "ready",
            description: "Ready Event",
        });
    }
    async run(client: BaseClient) {
        console.log(`${client.user.username} has logged in! (${client.commands.size} Commands)`);
    }
}