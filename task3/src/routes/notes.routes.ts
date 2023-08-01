import { Router } from "express";
import { NotesController } from "../services/notes.service";
import { validateNote } from "../middleware/validation.middleware";

const router = Router();
const notesController = new NotesController();

router.get("/stats", notesController.getStats);
router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNoteById);
router.post("/", validateNote, notesController.createNote);
router.patch("/:id", validateNote, notesController.editNote);
router.delete("/:id", notesController.removeNote);

export default router;