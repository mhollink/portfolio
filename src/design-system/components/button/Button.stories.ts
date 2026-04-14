import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button.tsx';

const meta = {
	title: 'Design/Elements/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		appearance: 'contained',
	},
};

export const PrimaryOutlined: Story = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		appearance: 'outlined',
	},
};

export const SecondaryContained: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		appearance: 'contained',
	},
};

export const SecondaryOutlined: Story = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		appearance: 'outlined',
	},
};
export const Contained: Story = {
	args: {
		children: 'Default Button',
		appearance: 'contained',
	},
};

export const Outlined: Story = {
	args: {
		children: 'Default Button',
		appearance: 'outlined',
	},
};
