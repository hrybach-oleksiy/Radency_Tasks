export interface Note {
	id: number;
	img: string | undefined;
	name: string;
	createdAt: string;
	content: string;
	category: string;
	datesMentioned: string[];
	archived: boolean;
}