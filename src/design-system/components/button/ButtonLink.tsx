import type { CSSProperties, ReactNode } from 'react';
import type { Appearance, Variant } from './styles.ts';
import { buttonBase, variantMap } from './styles.ts';

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
	const variantStyles = variantMap[variant];
	const styles: CSSProperties = {
		textDecoration: 'none',
		borderRadius: buttonBase.borderRadius,
		padding: `${buttonBase.paddingY}px ${buttonBase.paddingX}px`,
		fontWeight: buttonBase.fontWeight,
		border: '1px solid',

		...(appearance === 'contained'
			? {
					backgroundColor: variantStyles.backgroundColor,
					color: variantStyles.color,
					borderColor: variantStyles.borderColor,
				}
			: {
					backgroundColor: 'transparent',
					color: variantStyles.backgroundColor,
					borderColor: variantStyles.borderColor,
				}),
	};

	return (
		<a href={href} style={styles}>
			{children}
		</a>
	);
};
