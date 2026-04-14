import type { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex.tsx';
import { FlexItem } from './FlexItem.tsx';

const meta = {
	title: 'Design/Layout/Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	decorators: (Story) => (
		<div style={{ color: 'white' }}>
			<Story />
		</div>
	),
	tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<FlexItem>Item 1</FlexItem>
				<FlexItem>Item 2</FlexItem>
				<FlexItem>Item 3</FlexItem>
			</>
		),
		direction: 'row',
		gap: 'md',
		align: 'stretch',
		justify: 'flex-start',
		wrap: false,
	},
};
