import type { CSSProperties, ReactNode } from 'react';
import { Typography } from '../typography/Typography.tsx';

export const CardTitle = ({
	children,
	variant = 'h3',
	style,
}: {
	children: ReactNode;
	variant?: 'h2' | 'h3';
	style?: CSSProperties;
}) => (
	<Typography variant={variant} style={{ margin: '0 0 1rem', ...style }}>
		{children}
	</Typography>
);
