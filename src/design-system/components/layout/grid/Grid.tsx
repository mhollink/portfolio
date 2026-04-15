import type { FunctionComponent, PropsWithChildren } from 'react';
import { theme } from '../../../theme.ts';

export type GridProps = PropsWithChildren<{
	columns?: number;
	gap?: keyof typeof theme.spacing;
}>;

export const Grid: FunctionComponent<GridProps> = ({
	children,
	columns = 12,
	gap = 'md',
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
