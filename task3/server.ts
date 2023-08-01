import express from "express";
import bodyParser from "body-parser";
import notesRoutes from "./src/routes/notes.routes";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/notes", notesRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});