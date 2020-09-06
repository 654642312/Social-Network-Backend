"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
    },
    imgUser: {
        type: String,
        required: true
    },
    imgPost: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('post', PostSchema);
