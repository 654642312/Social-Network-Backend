"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../multer/multer"));
const post_controller_1 = require("../controllers/post.controller");
const router = express_1.Router();
router.route('/api/post')
    .get(post_controller_1.getPosts)
    .post(multer_1.default.single('imgPost'), post_controller_1.createPost);
router.route('/api/post/:id')
    .get(post_controller_1.getOnePost)
    .put(post_controller_1.updatePost)
    .delete(post_controller_1.deletePost);
exports.default = router;
