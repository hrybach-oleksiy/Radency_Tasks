import { Meta, StoryObj } from "@storybook/react";
import TableImg from "../features/notes/components/common/TableImg/TableImg";

const meta: Meta<typeof TableImg> = {
	title: 'TableImg',
	component: TableImg,
	// ...
};

export default meta;

type Story = StoryObj<typeof TableImg>;

export const Edit: Story = {
	args: {
		type: 'Edit',
		content: 'Edit',
	}
};


export const Archive: Story = {
	args: {
		type: 'Edit',
		content: 'Edit',
		className: 'archive_img',
	}
};