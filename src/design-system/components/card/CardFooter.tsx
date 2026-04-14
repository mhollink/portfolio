import type { ReactNode } from 'react';
import { theme } from '~/design-system/theme.ts';

export const CardFooter = ({ children }: { children: ReactNode }) => (
	<div
		style={{
			padding: theme.spacing.md,
			borderTop: `1px solid ${theme.colors.border}`,
		}}
	>
		{children}
	</div>
);
