"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SchemaCollectionPost = new mongoose_1.Schema({
    likes: [{
            likeId: { type: String }
        }],
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
});
exports.default = mongoose_1.model('collectionPost', SchemaCollectionPost);
