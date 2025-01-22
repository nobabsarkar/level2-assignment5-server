"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => {
    res.status(400).json({
        success: false,
        message: "Not Found",
        error: "",
    });
};
exports.default = notFound;
