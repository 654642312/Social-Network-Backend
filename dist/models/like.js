"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const likeSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true });
exports.default = mongoose_1.model('like', likeSchema);
