import type { CSSProperties } from 'react';
import { theme } from '~design-system/theme.ts';

export type Appearance = 'filled' | 'outlined';
export type Variant =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'highlight'
	| 'default';
export type Size = 'small' | 'medium' | 'large';

const sizes: Record<Size, CSSProperties> = {
	small: {
		fontSize: theme.typography.sizes.xs,
		padding: '3px 6px',
		borderRadius: '16px',
	},
	medium: {
		fontSize: theme.typography.sizes.sm,
		padding: '4px 8px',
		borderRadius: '16px',
	},
	large: {
		fontSize: theme.typography.sizes.md,
		padding: '6px 12px',
		borderRadius: '24px',
	},
};

export const Chip = ({
	label,
	variant = 'default',
	appearance = 'filled',
	size = 'medium',
}: {
	label: string;
	variant?: Variant;
	appearance?: Appearance;
	size?: Size;
}) => {
	const color =
		variant === 'default' ? theme.colors.border : theme.colors[variant];
	const sizeStyles = sizes[size];

	return (
		<span
			style={{
				color: appearance === 'filled' ? '#333' : color,
				backgroundColor: appearance === 'filled' ? color : 'transparent',
				borderColor: color,
				border: '1px solid',
				minWidth: '5ch',
				textAlign: 'center',
                textWrap: 'nowrap',
				...sizeStyles,
			}}
		>
			{label}
		</span>
	);
};
