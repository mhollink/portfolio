import type { ReactNode } from 'react';
import { theme } from '~/design-system/theme.ts';

export const CardContent = ({ children }: { children: ReactNode }) => (
	<div
		style={{
			padding: theme.spacing.md,
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		}}
	>
		{children}
	</div>
);
