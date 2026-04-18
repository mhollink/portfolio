import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Period } from '~components/sections/experiences/Period.tsx';
import { Flex } from '~design-system/components/layout/flex/Flex.tsx';
import { Typography } from '~design-system/components/typography/Typography.tsx';

export const Quintor: FunctionComponent = () => {
	const { t } = useTranslation('experience');
	const startDate = new Date('2017-09-01');
	return (
		<Flex direction="column" align="flex-start">
			<div>
				<Typography variant="h3">Quintor</Typography>
				<Typography variant="caption">
					<Period from={startDate} to={undefined} />
				</Typography>
			</div>
			<Typography variant="body" style={{ fontWeight: 'bold' }}>
				{t('opening')}
			</Typography>
			<Typography>{t('masterclass')}</Typography>
			<Typography>{t('timeline-start')}</Typography>
		</Flex>
	);
};
