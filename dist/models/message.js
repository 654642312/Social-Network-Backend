"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    imgUser: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('message', MessageSchema);
