import type { FunctionComponent, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import {
	type IconLink,
	ProjectLinks,
} from '~components/sections/projects/ProjectLinks.tsx';
import { Card } from '~design-system/components/card/Card.tsx';
import { CardContent } from '~design-system/components/card/CardContent.tsx';
import { CardImage } from '~design-system/components/card/CardImage.tsx';
import { CardTitle } from '~design-system/components/card/CardTitle.tsx';
import { Chip } from '~design-system/components/chip/Chip.tsx';
import { Flex } from '~design-system/components/layout/flex/Flex.tsx';

export type ProjectCardProps = PropsWithChildren<{
	title: string;
	imageUrl?: string;
	labels: string[];
	websiteLinkText?: string;
	websiteLink?: string;
	iconLinks?: IconLink[];
}>;

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	imageUrl,
	title,
	labels,
	children,
	websiteLinkText,
	websiteLink,
	iconLinks,
}) => (
	<Card>
		{imageUrl && <CardImage src={imageUrl} alt={title} />}
		<CardContent>
			<Flex direction="column" gap="none">
				<CardTitle
					style={{
						fontSize: '1.5rem',
						fontWeight: 'bold',
						marginBottom: '0.25rem',
					}}
				>
					{title}
				</CardTitle>
				<Flex gap="xs">
					{labels.map((label) => (
						<Fragment key={label}>
							<Chip appearance="outlined" label={label} size="small" />
						</Fragment>
					))}
				</Flex>
				<div className="project-card__content">{children}</div>
			</Flex>
			<ProjectLinks
				linkText={websiteLinkText}
				websiteLink={websiteLink}
				iconLinks={iconLinks}
			/>
		</CardContent>
	</Card>
);
