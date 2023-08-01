import * as Yup from "yup";
import { Request, Response, NextFunction } from "express";
import { noteSchema } from "../validation/noteValidation";

export const validateNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		await noteSchema.validate(req.body, { abortEarly: false });
		next();
	} catch (error) {
		const validationError = error as Yup.ValidationError;
		const errors = validationError.inner.map((err) => err.message);
		res.status(400).json({ message: "Validation error", errors });
	}
};