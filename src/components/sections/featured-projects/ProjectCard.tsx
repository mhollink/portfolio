import type { ReactNode } from 'react';
import {
	Card,
	CardContent,
	CardImage,
	CardTitle,
	Chip,
	Flex,
} from '~/design-system';
import { IconButton } from '../../../design-system/components/button/IconButton.tsx';

type ProjectLink = {
	to: string;
	icon: ReactNode;
};

type ProjectCardProps = {
	title: string;
	imageUrl?: string;
	labels: string[];
	children: ReactNode;
	links?: ProjectLink[];
};

export function ProjectCard({
	imageUrl,
	title,
	labels,
	children,
	links,
}: ProjectCardProps) {
	return (
		<Card className="project-card">
			{imageUrl && <CardImage src={imageUrl} alt={title} />}
			<CardContent>
                <Flex direction="column" gap="none">
                    <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {title}
                    </CardTitle>
                    <Flex gap="xs">
                        {labels.map((label) => (
                            <Chip appearance="outlined" label={label} key={label} />
                        ))}
                    </Flex>
                    <div className="project-card__content">{children}</div>
                </Flex>
				{links && (
					<Flex justify={'flex-end'} gap="xs">
						{links.map((link) => (
							<IconButton
								appearance="outlined"
								onClick={() => window.open(link.to, '_blank')}
								key={link.to}
							>
								{link.icon}
							</IconButton>
						))}
					</Flex>
				)}
			</CardContent>
		</Card>
	);
}
