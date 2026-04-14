import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/Button.tsx';
import { Flex } from '../layout/flex/Flex.tsx';
import { Typography } from '../typography/Typography.tsx';
import { Card } from './Card.tsx';
import { CardContent } from './CardContent.tsx';
import { CardFooter } from './CardFooter.tsx';
import { CardImage } from './CardImage.tsx';
import { CardTitle } from './CardTitle.tsx';

const meta = {
	title: 'Design/Elements/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	decorators: (Story) => (
		<div style={{ color: 'white' }}>
			<Story />
		</div>
	),
	tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {
	args: {
		children: (
			<>
				<CardContent>
					<CardTitle>Card Title</CardTitle>
					<Typography>
						Content of the card can be any combination of Typography, Chip or
						other layout elements.
					</Typography>
				</CardContent>
				<CardFooter>
					<Flex justify="flex-end">
						<Button appearance="outlined">Other button</Button>
						<Button variant="primary">Primary CTA</Button>
					</Flex>
				</CardFooter>
			</>
		),
	},
};

export const CardWithImage: Story = {
	args: {
		children: (
			<>
				<CardImage
					src={'https://picsum.photos/600/300'}
					alt={'Lorum Picsum image'}
				/>
				<CardContent>
					<CardTitle>Project Title</CardTitle>
					<Typography>
						Content of the card can be any combination of Typography, Chip or
						other layout elements.
					</Typography>
				</CardContent>
				<CardFooter>
					<Flex justify="flex-end">
						<Button appearance="outlined">Other button</Button>
						<Button variant="primary">Primary CTA</Button>
					</Flex>
				</CardFooter>
			</>
		),
	},
};

export const CardWithoutFooter: Story = {
	args: {
		children: (
			<>
				<CardContent>
					<CardTitle>Project Title</CardTitle>
					<Typography>
						Content of the card can be any combination of Typography, Chip or
						other layout elements.
					</Typography>
				</CardContent>
			</>
		),
	},
};
