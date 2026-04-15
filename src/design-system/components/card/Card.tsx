import type { FunctionComponent, PropsWithChildren } from 'react';
import { theme } from '~design-system/theme.ts';

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => (
	<div
		style={{
			border: `1px solid rgba(255, 255, 255, 0.2)`,
			borderRadius: theme.radius.lg,
			background: 'rgba(255, 255, 255, 0.05)',
			boxShadow: 'rgba(255, 255, 255, 0.1) 0 2px 8px',

			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			overflow: 'hidden',
		}}
	>
		{children}
	</div>
);
