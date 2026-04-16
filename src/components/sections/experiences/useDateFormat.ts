import { useTranslation } from 'react-i18next';

export const useDateFormatter = () => {
	const { i18n } = useTranslation();

	function formatMonthYear(date: Date, locale: string) {
		return new Intl.DateTimeFormat(locale, {
			year: 'numeric',
			month: 'short',
		}).format(date);
	}

	function format(date: Date) {
		return formatMonthYear(date, i18n.language);
	}

	return format;
};
