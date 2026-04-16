import type { ReactNode } from 'react';
import {
	type Appearance,
	buttonBase,
	getButtonStyles,
	type Variant,
	variantMap,
} from './styles.ts';

type ButtonLinkProps = {
	children: ReactNode;
	variant?: Variant;
	appearance?: Appearance;
	href?: string;
};

export const ButtonLink = ({
	children,
	variant = 'default',
	appearance = 'contained',
	href,
}: ButtonLinkProps) => {
	const variantStyles = getButtonStyles(variantMap[variant], appearance);
	const styles = {
		textDecoration: 'none',
		borderRadius: buttonBase.borderRadius,
		padding: `${buttonBase.paddingY}px ${buttonBase.paddingX}px`,
		fontWeight: buttonBase.fontWeight,
		border: '1px solid',

		...variantStyles,
	};

	return (
		<a href={href} style={styles}>
			{children}
		</a>
	);
};
