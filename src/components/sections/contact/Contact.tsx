import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '~design-system/components/typography/Typography.tsx';

export const Contact: FunctionComponent = () => {
	const { t } = useTranslation('contact');
	return (
		<section id="contact" className="contact">
			<Typography
				variant="h2"
				style={{ marginBottom: '32px', textAlign: 'center' }}
			>
				{t('heading')}
			</Typography>
		</section>
	);
};
