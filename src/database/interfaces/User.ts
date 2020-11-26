import { Snowflake } from "discord.js";
import { Document } from "mongoose";
import Item from "../../util/Interfaces/Item";

export default interface User extends Document {
    uId: Snowflake;
    money: number;
    items: Item[];
}