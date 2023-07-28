export interface Note {
	id: number;
	img: string;
	name: string;
	createdAt: string;
	content: string;
	category: string;
	datesMentioned: string[];
	archived: boolean;
}