import * as Yup from "yup";

const isCategoryValid = (value: string | undefined): boolean => {
	if (typeof value === "string") {
		return ["Task", "Random Thought", "Idea"].includes(value);
	}
	return false;
};

export const noteSchema = Yup.object().shape({
	id: Yup.number(),
	name: Yup.string().required("Name is required"),
	category: Yup.string()
		.test("is-valid-category", "Invalid category", isCategoryValid)
		.required("Category is required"),
	datesMentioned: Yup.array().of(Yup.string()),
	content: Yup.string().required("Content is required"),
	archived: Yup.boolean(),
});