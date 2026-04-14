import { useTranslation } from 'react-i18next';

export function useSnippet() {
	const { t } = useTranslation('hero');
	return `
const ${t('snippet.engineer')} = {
  stack: {
    frontend: ['React', 'TypeScript'],
    backend: ['Java', 'Kotlin', 'Spring Boot']
  },
  principles: [
    '${t('snippet.understandable')}', 
    '${t('snippet.maintainability')}'
  ],
  mindset: '${t('snippet.pragmatic')}',
  focus: '${t('snippet.architecture')} & DX'
}`.trim();
}
