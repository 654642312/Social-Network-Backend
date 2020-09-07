"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getOnePost = exports.getPosts = void 0;
const post_1 = __importDefault(require("../models/post"));
const fs_extra_1 = require("fs-extra");
const path_1 = __importDefault(require("path"));
exports.getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Posts = yield post_1.default.find();
    return res.status(200).json(Posts);
});
exports.getOnePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.findById(req.params.id);
    if (post !== null) {
        return res.status(200).json(post);
    }
    return res.status(400).json({ 'message': 'error' });
});
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, description, imgUser, imgPost } = req.body;
    const imagePath = '/uploads/' + req.file.fieldname;
    const newPost = new post_1.default({
        username, description, imgUser, imgPost
    });
    yield newPost.save();
    return res.status(200).json({ 'message': 'save successfully' });
});
exports.updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json({ 'message': 'updated successfully' });
});
exports.deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.findByIdAndDelete(req.params.id);
    if (post !== null) {
        fs_extra_1.unlink(path_1.default.resolve('/backend/src/public' + post.imgPost));
        fs_extra_1.unlink(path_1.default.resolve('/backend/src/public' + post.imgUser));
        return res.status(200).json({ 'message': 'post deleted' });
    }
    return res.status(400).json({ 'message': 'error' });
});
