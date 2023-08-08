import { Meta, StoryObj } from "@storybook/react";

import TableButton from "../features/notes/components/common/TableButton/TableButton";

const meta: Meta<typeof TableButton> = {
	title: 'TableButton',
	component: TableButton,
	// ...
};

export default meta;

type Story = StoryObj<typeof TableButton>;

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