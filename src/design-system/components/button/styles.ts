import type { CSSProperties } from 'react';
import { theme } from '~design-system/theme.ts';

export type Variant = 'primary' | 'secondary' | 'accent' | 'default';
export type Appearance = 'contained' | 'outlined' | 'text';

export const buttonBase = {
	borderRadius: theme.radius.md,
	paddingY: theme.spacing.sm,
	paddingX: theme.spacing.md,
	fontWeight: theme.typography.weights.medium,
};

export const variantMap: Record<Variant, CSSProperties> = {
	primary: {
		backgroundColor: theme.colors.primary,
		color: '#333333',
		borderColor: theme.colors.primary,
	},
	secondary: {
		backgroundColor: theme.colors.secondary,
		color: '#ffffff',
		borderColor: theme.colors.secondary,
	},
	accent: {
		backgroundColor: theme.colors.accent,
		color: '#333333',
		borderColor: theme.colors.accent,
	},
	default: {
		backgroundColor: theme.colors.text,
		color: theme.colors.background,
		borderColor: theme.colors.border,
	},
};

export const getButtonStyles = (
	variantStyles: CSSProperties,
	appearance: Appearance,
) => {
	const appearanceMap: Record<Appearance, CSSProperties> = {
		contained: {
			backgroundColor: variantStyles.backgroundColor,
			color: variantStyles.color,
			borderColor: variantStyles.borderColor,
		},
		outlined: {
			backgroundColor: 'transparent',
			color: variantStyles.backgroundColor,
			borderColor: variantStyles.borderColor,
		},
		text: {
			backgroundColor: 'transparent',
			color: variantStyles.backgroundColor,
			borderColor: 'transparent',
		},
	};
	return appearanceMap[appearance];
};
