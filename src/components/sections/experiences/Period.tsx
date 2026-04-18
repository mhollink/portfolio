import { useTranslation } from 'react-i18next';
import { useDateFormatter } from '~components/sections/experiences/useDateFormat.ts';
import { useDuration } from '~components/sections/experiences/useDuration.ts';

export const Period = ({ from, to }: { from: Date; to?: Date }) => {
	const { t } = useTranslation('keywords');
	const formatDate = useDateFormatter();
	const getYearsAndMonthsSince = useDuration();
	const { years, months } = getYearsAndMonthsSince(from, to);
	return (
		<span>
			{formatDate(from)} &mdash; {to ? formatDate(to) : t('present')} &#183;{' '}
			{years > 0 ? `${years} ${t('years')} ` : ''}
			{months > 0 ? `${months} ${t('months')}` : ''}
		</span>
	);
};
