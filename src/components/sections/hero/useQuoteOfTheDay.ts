import { useMemo } from 'react';
import { useDailyRandom } from './useDailyRandom.ts';

export function useQuoteOfTheDay(quotes: string[]): string | null {
	const random = useDailyRandom();

	return useMemo(() => {
		if (!quotes.length) return null;

		const index = Math.floor(random * quotes.length);
		return quotes[index];
	}, [quotes, random]);
}
