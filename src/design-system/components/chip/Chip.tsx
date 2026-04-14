import { theme } from '~/design-system/theme.ts';

type Appearance = 'filled' | 'outlined';
type Variant = 'primary' | 'secondary' | 'accent' | 'highlight' | 'default';

export const Chip = ({
	label,
	variant = 'default',
	appearance = 'filled',
}: {
	label: string;
	variant?: Variant;
	appearance?: Appearance;
}) => {
	const color =
		variant === 'default' ? theme.colors.border : theme.colors[variant];
	return (
		<span
			style={{
				padding: '4px 8px',
				borderRadius: theme.radius.md,
				backgroundColor: appearance === 'filled' ? color : 'transparent',
				border: '1px solid',
				borderColor: color,
				color: appearance === 'filled' ? '#333' : color,
				fontSize: theme.typography.sizes.sm,
			}}
		>
			{label}
		</span>
	);
};
