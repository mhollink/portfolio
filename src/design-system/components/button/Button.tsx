import type { ReactNode } from 'react';
import {
	type Appearance,
	buttonBase,
	getButtonStyles,
	type Variant,
	variantMap,
} from './styles.ts';

export type ButtonProps = {
	children?: ReactNode;
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
	const variantStyles = getButtonStyles(variantMap[variant], appearance);
	const styles = {
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

		...variantStyles,
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
