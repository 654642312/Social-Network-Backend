"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    imgPath: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model('post', PostSchema);
