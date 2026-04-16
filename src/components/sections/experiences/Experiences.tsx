import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Clients } from '~components/sections/experiences/Clients.tsx';
import { Quintor } from '~components/sections/experiences/Quintor.tsx';
import { Typography } from '~design-system/components/typography/Typography.tsx';

export const Experiences: FunctionComponent = () => {
	const { t } = useTranslation('experience');
	return (
		<section id="experience" className="experience">
			<Typography
				variant="h2"
				style={{ marginBottom: '32px', textAlign: 'center' }}
			>
				{t('heading')}
			</Typography>

			<Quintor />
			<Clients />
		</section>
	);
};
