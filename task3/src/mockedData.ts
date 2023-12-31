export type Category = "Task" | "Random Thought" | "Idea";

export interface Note {
	id: number;
	name: string;
	createdAt: string;
	category: Category;
	datesMentioned: string[];
	content: string;
	archived: boolean;
}

export const mockedData: Note[] = [
	{
		id: 1,
		name: 'Grocery List',
		createdAt: '2023-07-26T12:00:00',
		content: 'Buy groceries for dinner on 1/8/2023',
		category: 'Task',
		datesMentioned: ['1/8/2023'],
		archived: false,
	},
	{
		id: 2,
		name: 'Beach Day',
		createdAt: '2023-07-25T14:30:00',
		content: 'Have a great day at the beach',
		category: 'Random Thought',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 3,
		name: 'Project Idea',
		createdAt: '2023-07-24T10:15:00',
		content: 'Start working on the new project idea',
		category: 'Idea',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 4,
		name: 'Meeting Presentation',
		createdAt: '2023-07-23T09:00:00',
		content: 'Prepare presentation slides for the meeting on 30/7/2023 and check all stuff for meeting on 3/8/2023',
		category: 'Task',
		datesMentioned: ['30/7/2023', '3/8/2023'],
		archived: false,
	},
	{
		id: 5,
		name: 'Art Museum Visit',
		createdAt: '2023-07-22T17:45:00',
		content: 'Visited the art museum today',
		category: 'Random Thought',
		datesMentioned: [],
		archived: false,
	},
	{
		id: 6,
		name: 'Hiking Plan',
		createdAt: '2023-07-21T11:30:00',
		content: 'Explore new hiking trails in the mountains',
		category: 'Idea',
		datesMentioned: [],
		archived: true,
	},
	{
		id: 7,
		name: 'Mom\'s Birthday Gift',
		createdAt: '2023-07-20T15:20:00',
		content: 'Buy a gift for mom\'s birthday on 4/8/2023',
		category: 'Task',
		datesMentioned: ['4/8/2023'],
		archived: false,
	},
];