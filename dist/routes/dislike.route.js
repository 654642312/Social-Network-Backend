"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dislike_controller_1 = require("../controllers/dislike.controller");
const router = express_1.Router();
router.route('/api/dislike')
    .post(dislike_controller_1.handlerDislike);
exports.default = router;
