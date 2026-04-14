import type { Meta, StoryObj } from '@storybook/react-vite';

import { Chip } from './Chip.tsx';

const meta = {
	title: 'Design/Elements/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Chip content',
	},
};
