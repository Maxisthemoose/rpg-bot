import { Client, Collection } from "discord.js";
import BaseClientData from "../Interfaces/Client";
import "dotenv/config";
import Command from "./Command";
import initC from "../registry/Commands";
import initE from "../registry/Events";

export default class BaseClient extends Client {

    commands = new Collection<string, Command>();
    aliases = new Collection<string, string>();

    constructor(public BaseClientData: BaseClientData) {
        super(BaseClientData.Base);
    }

    public async start() {
        await import("../../database/database");
        initC("./src/commands", ["general"], this);
        initE("./src/events", this);
        this.login(this.BaseClientData.token);
    }

}