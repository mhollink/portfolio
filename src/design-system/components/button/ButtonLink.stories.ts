import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonLink } from './ButtonLink.tsx';

const meta = {
	title: 'Design/Elements/ButtonLink',
	component: ButtonLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { href: '#link' },
} satisfies Meta<typeof ButtonLink>;

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
