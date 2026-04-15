import type { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { Typography } from '../typography/Typography.tsx';

export type TitleVariant = 'h2' | 'h3';
export type CardTitleProps = {
	children: ReactNode;
	variant?: TitleVariant;
	style?: CSSProperties;
};

export const CardTitle: FunctionComponent<CardTitleProps> = ({
	children,
	variant = 'h3' as TitleVariant,
	style,
}) => (
	<Typography variant={variant} style={{ margin: '0 0 1rem', ...style }}>
		{children}
	</Typography>
);
