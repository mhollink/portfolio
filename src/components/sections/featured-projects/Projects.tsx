import { FaGithub, FaLink } from 'react-icons/fa';
import { Typography } from '~/design-system';
import { ProjectCard } from './ProjectCard.tsx';
import { useTranslation } from 'react-i18next';

export function Projects() {
    const {t} = useTranslation('featured-projects');
	return (
		<section id="projects" className="featured-projects">
			<div className="featured-projects__body">
				<Typography variant="h2" style={{marginBottom: "32px"}}>{t("heading")}</Typography>
				<div className="featured-projects__card-container">
					<ProjectCard
						imageUrl={'/images/projects/mesbg.png'}
						title={t('mlb.title')}
						labels={['React-ts', 'FireAuth', 'SlimFramework']}
						links={[
							{ icon: <FaLink />, to: 'https://mesbg-list-builder.com' },

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
						labels={['React-ts', 'FireAuth', 'SlimFramework']}
						links={[
							{ icon: <FaLink />, to: 'https://miniature-inventory.nl/' },

							{
								icon: <FaGithub />,
								to: 'https://github.com/avcordaro/mesbg-list-builder-v2024',
							},
						]}
					>
						<Typography>{t('inventory.description')}</Typography>
					</ProjectCard>
					<ProjectCard
						imageUrl={'/images/projects/plugins.png'}
						title={t('plugins.title')}
						labels={['Java']}
						links={[
							{
								icon: <FaGithub />,
								to: 'https://github.com/mhollink?tab=repositories&q=%22runelite-plugins%22',
							},
						]}
					>
						<Typography>{t('plugins.description')}</Typography>
					</ProjectCard>
				</div>
			</div>
		</section>
	);
}
