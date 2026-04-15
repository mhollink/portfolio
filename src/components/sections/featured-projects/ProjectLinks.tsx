import type { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from '~design-system/components/button/ButtonLink.tsx';
import { IconButton } from '~design-system/components/button/IconButton.tsx';
import { Flex } from '~design-system/components/layout/flex/Flex.tsx';
import { FlexItem } from '~design-system/components/layout/flex/FlexItem.tsx';

export type IconLink = {
	to: string;
	icon: ReactNode;
};

export type ProjectLinksProps = {
	linkText?: string;
	websiteLink?: string;
	iconLinks?: IconLink[];
};

export const ProjectLinks: FunctionComponent<ProjectLinksProps> = ({
	linkText,
	websiteLink,
	iconLinks,
}) => {
	const { t } = useTranslation('featured-projects', {keyPrefix: "project-card"});
	return (
		<Flex direction="row" justify="space-between" align="center">
			{Boolean(websiteLink) && (
				<ButtonLink href={websiteLink} variant="primary">
					{linkText || t('visit-site')}
				</ButtonLink>
			)}
			{iconLinks && iconLinks.length > 0 && (
				<FlexItem grow={1}>
					<Flex justify={'flex-end'} gap="xs">
						{iconLinks.map((link) => (
							<IconButton
								appearance="outlined"
								onClick={() => window.open(link.to, '_blank')}
								key={link.to}
							>
								{link.icon}
							</IconButton>
						))}
					</Flex>
				</FlexItem>
			)}
		</Flex>
	);
};
