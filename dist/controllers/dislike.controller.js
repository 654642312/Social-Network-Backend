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
exports.handlerDislike = void 0;
const dislike_1 = __importDefault(require("../models/dislike"));
const addDislike = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
    const upDislike = new dislike_1.default({ userId, postId });
    yield upDislike.save();
});
const removeDislike = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield dislike_1.default.findOneAndDelete(userId);
});
exports.handlerDislike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, postId } = req.body;
    const user = yield dislike_1.default.find(userId);
    if (user === null) {
        yield addDislike(userId, postId);
        return res.status(200).json({ message: 'up like sucessfully' });
    }
    yield removeDislike(userId);
    return res.status(200).json({ message: 'remove like successfully' });
});
