import type { CSSProperties } from 'react';
import { theme } from '~design-system/theme.ts';

export type Variant = 'primary' | 'secondary' | 'default';
export type Appearance = 'contained' | 'outlined';

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
	default: {
		backgroundColor: theme.colors.text,
		color: theme.colors.background,
		borderColor: theme.colors.border,
	},
};
