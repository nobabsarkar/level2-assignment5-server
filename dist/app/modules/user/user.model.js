"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name is Required"] },
    email: { type: String, required: [true, "Email is Required"], unique: true },
    password: { type: String, required: [true, "Password is Required"] },
    phone: {
        type: String,
        required: [true, "Phone Number is Required"],
    },
    address: { type: String, required: [true, "Address is Required"] },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN"] },
});
exports.User = (0, mongoose_1.model)("User", userSchema);
