import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from './Typography.tsx';

const meta = {
	title: 'Design/Text/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
	args: {
		children: 'Regular body text',
	},
};

export const H1: Story = {
	args: {
		children: 'Header 1',
		variant: 'h1',
	},
};

export const H2: Story = {
	args: {
		children: 'Header 2',
		variant: 'h2',
	},
};

export const H3: Story = {
	args: {
		children: 'Header 3',
		variant: 'h3',
	},
};

export const Caption: Story = {
	args: {
		children: 'subtitles or captions...',
		variant: 'caption',
	},
};
