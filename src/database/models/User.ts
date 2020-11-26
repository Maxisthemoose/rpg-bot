import { Schema, model } from "mongoose";

const User = new Schema({

    uId: { type: String, required: true },

    money: { type: Number, default: 0 },
    items: { type: Array, default: [] },
    level: { type: Number, default: 1 },
    prestige: { type: Number, default: 0 },

});

export default model("users", User);