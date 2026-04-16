import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '~design-system/components/typography/Typography.tsx';

export const About: FunctionComponent = () => {
	const { t } = useTranslation('about');
	return (
		<section id="about" className="about">
			<Typography
				variant="h2"
				style={{ marginBottom: '32px', textAlign: 'center' }}
			>
				{t('heading')}
			</Typography>
		</section>
	);
};
