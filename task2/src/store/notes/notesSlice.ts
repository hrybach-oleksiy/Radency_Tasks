import { createSlice } from "@reduxjs/toolkit";

import { Note } from "../../types/note";

import taskLogo from '../../assets/task.svg';
import randomLogo from '../../assets/random.svg';
import ideaLogo from '../../assets/idea.svg';

// Initial state with prepopulated notes
const initialState: Note[] = [
	// Your prepopulated notes here
	{
		id: 1,
		name: 'Grocery List',
		img: taskLogo,
		createdAt: '2023-07-26T12:00:00',
		content: 'Buy groceries for dinner on 1/8/2023',
		category: 'Task',
		datesMentioned: ['1/8/2023'],
		archived: false,
	},
	{
		id: 2,
		name: 'Beach Day',
		img: randomLogo,
		createdAt: '2023-07-25T14:30:00',
		content: 'Have a great day at the beach',
		category: 'Random Thought',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 3,
		name: 'Project Idea',
		img: ideaLogo,
		createdAt: '2023-07-24T10:15:00',
		content: 'Start working on the new project idea',
		category: 'Idea',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 4,
		name: 'Meeting Presentation',
		img: taskLogo,
		createdAt: '2023-07-23T09:00:00',
		content: 'Prepare presentation slides for the meeting on 30/7/2023 and check all stuff for meeting on 3/8/2023',
		category: 'Task',
		datesMentioned: ['30/7/2023', '3/8/2023'],
		archived: false,
	},
	{
		id: 5,
		name: 'Art Museum Visit',
		img: randomLogo,
		createdAt: '2023-07-22T17:45:00',
		content: 'Visited the art museum today',
		category: 'Random Thought',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 6,
		name: 'Hiking Plan',
		img: ideaLogo,
		createdAt: '2023-07-21T11:30:00',
		content: 'Explore new hiking trails in the mountains',
		category: 'Idea',
		datesMentioned: [],
		archived: true,
	},
	{
		id: 7,
		name: 'Mom\'s Birthday Gift',
		img: taskLogo,
		createdAt: '2023-07-20T15:20:00',
		content: 'Buy a gift for mom\'s birthday on 4/8/2023',
		category: 'Task',
		datesMentioned: ['4/8/2023'],
		archived: false,
	},
];

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote(state, action) {
			state.push(action.payload)
		},
		deleteNote(state, action) {
			return state.filter((note) => note.id !== action.payload);
		},
		archiveNote(state, action) {
			const noteToArchive = state.find(note => note.id === action.payload)
			if (noteToArchive) {
				noteToArchive.archived = true;
			}
		},
		unarchiveNote(state, action) {
			const noteToUnarchive = state.find(note => note.id === action.payload)
			if (noteToUnarchive) {
				noteToUnarchive.archived = false;
			}
		},
		editNote: (state, action) => {
			const existingNote = state.find((note) => note.id === action.payload.id);
			console.log(existingNote)
			if (existingNote) {
				Object.assign(existingNote, action.payload);
			}
		},
	},
});

export const { addNote, deleteNote, archiveNote, unarchiveNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;