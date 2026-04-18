import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { FaJava } from 'react-icons/fa6';
import { SiCypress, SiDocker, SiGitlab, SiReact, SiVite } from 'react-icons/si';
import { Typography } from '~design-system/components/typography/Typography.tsx';

export const About: FunctionComponent = () => {
	const { t } = useTranslation('about');
	return (
		<section id="about" className="about">
			<div className="about__container">
				<Typography
					variant="h2"
					style={{ marginBottom: '32px', textAlign: 'center' }}
				>
					{t('heading')}
				</Typography>

				<div className="about__content">
					<Typography className="about__content__text">{t('text')}</Typography>
					<div className="about__content__avatar">
						<img
							src="/images/avatar.jpeg"
							alt="Avatar"
							className="about__content__avatar__image"
						/>
					</div>
					<div className="about__content__icons">
						<span className="tech-icon" data-tooltip="Java">
							<FaJava />
						</span>
						<span className="tech-icon" data-tooltip="Spring Boot">
							<BiLogoSpringBoot />
						</span>
						<span className="tech-icon" data-tooltip="React">
							<SiReact />
						</span>
						<span className="tech-icon" data-tooltip="Vite">
							<SiVite />
						</span>
						<span className="tech-icon" data-tooltip="Cypress">
							<SiCypress />
						</span>
						<span className="tech-icon" data-tooltip="Docker">
							<SiDocker />
						</span>
						<span className="tech-icon" data-tooltip="Gitlab">
							<SiGitlab />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
