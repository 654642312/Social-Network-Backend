"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = express_1.Router();
router.route('api/create-post')
    .get(post_controller_1.getPosts)
    .post(post_controller_1.createPost);
router.route('api/create-post/:id')
    .get(post_controller_1.getOnePost)
    .put(post_controller_1.updatePost)
    .delete(post_controller_1.deletePost);
exports.default = router;
