import { useTranslation } from 'react-i18next';
import { Typography } from '~/design-system';
import { useQuoteOfTheDay } from './useQuoteOfTheDay.ts';

const quotes = Array.from({ length: 8 }).map((_, i) => `quote-${i + 1}`);

export function MessageOfTheDay() {
	const { t } = useTranslation('motd');
	const quoteKey = useQuoteOfTheDay(quotes);
	return (
		<Typography
			variant="caption"
			style={{ textAlign: 'center', fontSize: '1.25rem' }}
		>
			&ldquo;{t(quoteKey)}&rdquo;
		</Typography>
	);
}
