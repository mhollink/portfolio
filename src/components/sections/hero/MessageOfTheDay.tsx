import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '~design-system/components/typography/Typography.tsx';
import { useQuoteOfTheDay } from './useQuoteOfTheDay.ts';

const quotes = Array.from({ length: 8 }).map((_, i) => `quote-${i + 1}`);

export const MessageOfTheDay: FunctionComponent = () => {
	const { t } = useTranslation('hero', { keyPrefix: 'motd' });
	const quoteKey = useQuoteOfTheDay(quotes);

	if (!quoteKey) return null;

	return (
		<Typography style={{ textAlign: 'center', fontSize: '1.25rem' }}>
			&ldquo;{t(quoteKey)}&rdquo;
		</Typography>
	);
};
