import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from './Grid.tsx';
import { GridItem } from './GridItem.tsx';

const meta = {
	title: 'Design/Layout/Grid',
	component: Grid,
	parameters: {
		layout: 'centered',
	},
	decorators: (Story) => (
		<div style={{ color: 'white', textAlign: 'center' }}>
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
				<GridItem
					span={12}
					style={{ border: '1px solid white', padding: '8px' }}
				>
					Item 1
				</GridItem>
				<GridItem
					span={6}
					style={{ border: '1px solid white', padding: '8px' }}
				>
					Item 2
				</GridItem>
				<GridItem
					span={6}
					style={{ border: '1px solid white', padding: '8px' }}
				>
					Item 3
				</GridItem>
			</>
		),
		columns: 12,
		gap: 'md',
	},
};
