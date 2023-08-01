"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const notes_routes_1 = __importDefault(require("./src/routes/notes.routes"));
const port = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/notes", notes_routes_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});