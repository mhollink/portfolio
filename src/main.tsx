import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './i18n/i18n.ts';
import './styles/index.scss';

const root = document.getElementById('root');

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
