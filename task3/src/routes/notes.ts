import { Router } from "express";
import { NotesController } from "../controllers/notes.js";
// import { validateNote } from "../middleware/validation.middleware.js";

const router = Router();
const notesController = new NotesController();

// router.get("/stats", notesController.getStats);
router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNoteById);
router.post("/", notesController.createNote);
router.patch("/:id", notesController.updateNote);
router.delete("/:id", notesController.deleteNote);

export default router;