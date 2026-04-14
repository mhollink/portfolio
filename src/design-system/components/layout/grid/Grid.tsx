import type { ReactNode } from 'react';
import { theme } from '~/design-system/theme.ts';

export const Grid = ({
	children,
	columns = 12,
	gap = 'md',
}: {
	children: ReactNode;
	columns?: number;
	gap?: keyof typeof theme.spacing;
}) => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: `repeat(${columns}, 1fr)`,
			gap: theme.spacing[gap],
		}}
	>
		{children}
	</div>
);
