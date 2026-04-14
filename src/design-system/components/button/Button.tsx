import type { CSSProperties, ReactNode } from 'react';
import type { Appearance, Variant } from './styles.ts';
import { buttonBase, variantMap } from './styles.ts';

type ButtonProps = {
	children: ReactNode;
	variant?: Variant;
	appearance?: Appearance;
	onClick?: () => void;
	disabled?: boolean;
	iconOnly?: boolean;
	ariaLabel?: string;
};

export const Button = ({
	children,
	variant = 'default',
	appearance = 'contained',
	onClick,
	disabled = false,
	iconOnly = false,
	ariaLabel,
}: ButtonProps) => {
	const variantStyles = variantMap[variant];
	const styles: CSSProperties = {
		borderRadius: iconOnly ? '50%' : buttonBase.borderRadius,
		padding: iconOnly
			? '0'
			: `${buttonBase.paddingY}px ${buttonBase.paddingX}px`,
		width: iconOnly ? '2rem' : undefined,
		height: iconOnly ? '2rem' : undefined,
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',

		fontWeight: buttonBase.fontWeight,
		cursor: disabled ? 'not-allowed' : 'pointer',
		opacity: disabled ? 0.6 : 1,
		border: iconOnly ? 'none' : '1px solid',

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
		<button
			type="button"
			style={styles}
			onClick={onClick}
			disabled={disabled}
			aria-label={iconOnly ? ariaLabel : undefined}
		>
			{iconOnly ? (
				<span style={{ display: 'flex', fontSize: '1.5rem' }}>{children}</span>
			) : (
				children
			)}
		</button>
	);
};
