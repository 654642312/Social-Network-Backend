"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const like_controller_1 = require("../controllers/like.controller");
const router = express_1.Router();
router.route('/api/like')
    .post(like_controller_1.handlerLike);
exports.default = router;
