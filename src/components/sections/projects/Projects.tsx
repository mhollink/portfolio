import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { Typography } from '~design-system/components/typography/Typography.tsx';
import { ProjectCard } from './ProjectCard.tsx';

export const Projects: FunctionComponent = () => {
	const { t } = useTranslation('projects');
	return (
		<section id="projects" className="featured-projects">
			<div className="featured-projects__body">
				<Typography
					variant="h2"
					style={{ marginBottom: '32px', textAlign: 'center' }}
				>
					{t('heading')}
				</Typography>
				<div className="featured-projects__card-container">
					<ProjectCard
						imageUrl={'/images/projects/mesbg.png'}
						title={t('mlb.title')}
						labels={['React', 'Firebase Auth', 'SlimFramework']}
						websiteLink="https://mesbg-list-builder.com"
						iconLinks={[
							{
								icon: <FaGithub />,
								to: 'https://github.com/avcordaro/mesbg-list-builder-v2024',
							},
						]}
					>
						<Typography>{t('mlb.description')}</Typography>
					</ProjectCard>
					<ProjectCard
						imageUrl={'/images/projects/shame.png'}
						title={t('inventory.title')}
						labels={['React', 'Firebase Auth', 'SlimFramework']}
						websiteLink="https://miniature-inventory.nl"
						iconLinks={[
							{
								icon: <FaGithub />,
								to: 'https://github.com/mhollink/miniature-inventory',
							},
						]}
					>
						<Typography>{t('inventory.description')}</Typography>
					</ProjectCard>
					<ProjectCard
						imageUrl={'/images/projects/plugins.png'}
						title={t('plugins.title')}
						labels={['Java']}
						iconLinks={[
							{
								icon: <FaGithub />,
								to: 'https://github.com/mhollink?tab=repositories&q=%22runelite-plugins%22',
							},
						]}
					>
						<Typography>{t('plugins.description')}</Typography>
					</ProjectCard>
					<ProjectCard
						imageUrl={'/images/projects/ppp.png'}
						title={t('poolparty.title')}
						websiteLink={'/downloads/PoolPartyPanic_WindowsBeta.zip'}
						websiteLinkText={'Download'}
						labels={['C#', 'Unity3d']}
					>
						<Typography>{t('poolparty.description')}</Typography>
					</ProjectCard>
				</div>
			</div>
		</section>
	);
};
