import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import '../src/styles/theme/index.scss';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			options: {
				dark: { name: 'Dark', value: '#333' },
				light: { name: 'Light', value: '#F7F9F2' },
			},
		},

		docs: {
			theme: themes.dark,
		},

		a11y: {
			test: 'todo',
		},
	},

	initialGlobals: {
		backgrounds: { value: 'dark' },
	},
};

export default preview;
