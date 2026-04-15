import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './i18n/i18n.ts';
import './styles/index.scss';

const root = document.getElementById('root');

if (!root) throw new Error('Root element not found');

console.log('Hello world!');

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
