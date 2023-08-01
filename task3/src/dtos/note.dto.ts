import * as yup from 'yup';

const noteSchema = yup.object().shape({
	name: yup.string().required(),
	date: yup.date().required(),
	category: yup.string().required(),
	content: yup.string().required(),
});

export default noteSchema;