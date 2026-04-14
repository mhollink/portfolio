import { useTranslation } from 'react-i18next';
import { ButtonLink, Typography } from '~/design-system';
import { MessageOfTheDay } from '../../motd/MessageOfTheDay.tsx';
import { useSnippet } from './useSnippet.ts';

export function Hero() {
	const { t } = useTranslation('hero');
	const snippet = useSnippet();
	return (
		<section id="hero" className="hero">
			<div className="hero__body">
				<div className="hero__container">
					<div className="hero__content">
						<Typography variant="h1" style={{ fontSize: '3rem' }}>
							{t('headline')}
						</Typography>

						<Typography style={{ fontSize: '1.5rem', margin: '2rem 0' }}>
							{t('subtext')}
						</Typography>

						<div className="hero__actions">
							<ButtonLink href="#projects" variant="primary">
								{t('buttons.projects')}
							</ButtonLink>
							<ButtonLink href="/resume.pdf" appearance="outlined">
								{t('buttons.resume')}
							</ButtonLink>
						</div>
					</div>

					<div className="hero__visual">
						<div className="code-card">
							<pre>{snippet}</pre>
						</div>
					</div>
				</div>
				<div className="hero__motd">
					<MessageOfTheDay />
				</div>
			</div>
		</section>
	);
}
