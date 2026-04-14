import type { CSSProperties, ReactNode } from 'react';
import { theme } from '~/design-system/theme.ts';

export const Flex = ({
	children,
	direction = 'row',
	gap = 'md',
	align = 'stretch',
	justify = 'flex-start',
	wrap = false,
}: {
	children: ReactNode;
	direction?: 'row' | 'column';
	gap?: keyof typeof theme.spacing;
	align?: CSSProperties['alignItems'];
	justify?: CSSProperties['justifyContent'];
	wrap?: boolean;
}) => (
	<div
		style={{
			display: 'flex',
			flexDirection: direction,
			gap: theme.spacing[gap],
			alignItems: align,
			justifyContent: justify,
			flexWrap: wrap ? 'wrap' : 'nowrap',
		}}
	>
		{children}
	</div>
);
