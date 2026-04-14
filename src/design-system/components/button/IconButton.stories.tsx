import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaReact } from 'react-icons/fa';

import { fn } from 'storybook/test';

import { IconButton } from './IconButton.tsx';

const meta = {
	title: 'Design/Elements/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
	args: {
		children: <FaReact />,
		variant: 'primary',
		appearance: 'contained',
	},
};

export const PrimaryOutlined: Story = {
	args: {
		children: <FaReact />,
		variant: 'primary',
		appearance: 'outlined',
	},
};

export const SecondaryContained: Story = {
	args: {
		children: <FaReact />,
		variant: 'secondary',
		appearance: 'contained',
	},
};

export const SecondaryOutlined: Story = {
	args: {
		children: <FaReact />,
		variant: 'secondary',
		appearance: 'outlined',
	},
};
export const Contained: Story = {
	args: {
		children: <FaReact />,
		appearance: 'contained',
	},
};

export const Outlined: Story = {
	args: {
		children: <FaReact />,
		appearance: 'outlined',
	},
};
