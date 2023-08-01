import { Router } from "express";
import { NotesController } from "../services/notes.service";

const router = Router();
const notesController = new NotesController();

router.get("/stats", notesController.getStats);
router.get("/", notesController.getAllNotes);
router.get("/:id", notesController.getNoteById);
router.post("/", notesController.createNote);
router.patch("/:id", notesController.editNote);
router.delete("/:id", notesController.removeNote);

export default router;