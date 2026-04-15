import type { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageButton: FunctionComponent = () => {
	const { i18n } = useTranslation();
	return (
		<button
			className="navbar__language"
			onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'nl' : 'en')}
			type="button"
		>
			<img
				src={
					i18n.language === 'en'
						? '/images/flags/en.svg'
						: '/images/flags/nl.svg'
				}
				alt="Switch language"
			/>
		</button>
	);
};
