import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~design-system': path.resolve(__dirname, 'src/design-system'),
			'~i18n': path.resolve(__dirname, 'src/i18n'),
			'~components': path.resolve(__dirname, 'src/components'),
		},
	},
});
