import type {
	CSSProperties,
	ElementType,
	FunctionComponent,
	PropsWithChildren,
} from 'react';
import { theme } from '../../theme.ts';

export type Variant = 'body' | 'caption' | 'h1' | 'h2' | 'h3';

const variantMap: Record<Variant, ElementType> = {
	body: 'p',
	caption: 'span',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
};

type TypographyProps = PropsWithChildren<{
	variant?: Variant;
	color?: keyof typeof theme.colors;
	style?: CSSProperties;
	className?: string;
}>;

export const Typography: FunctionComponent<TypographyProps> = ({
	variant = 'body' as Variant,
	children,
	color,
	style,
	className,
}) => {
	const Component = variantMap[variant];
	const variantStyle = getVariantStyle(variant);
	const styles: CSSProperties = {
		...variantStyle,
		...style,
		color: color ? theme.colors[color] : (style?.color ?? variantStyle.color),
	};
	return (
		<Component style={styles} className={className}>
			{children}
		</Component>
	);
};

function getVariantStyle(variant: Variant): CSSProperties {
	const heading: CSSProperties = {
		background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		backgroundClip: 'text',
		color: 'transparent',
	};
	switch (variant) {
		case 'h1':
			return {
				...heading,
				fontSize: theme.typography.sizes['2xl'],
				fontWeight: theme.typography.weights.bold,
			};
		case 'h2':
			return {
				...heading,
				fontSize: theme.typography.sizes.xl,
				fontWeight: theme.typography.weights.medium,
			};
		case 'h3':
			return {
				...heading,
				fontSize: theme.typography.sizes.md,
				fontWeight: theme.typography.weights.medium,
			};
		case 'caption':
			return {
				fontSize: theme.typography.sizes.xs,
				color: theme.colors.caption,
			};
		default:
			return {
				fontSize: theme.typography.sizes.sm,
				color: theme.colors.text,
			};
	}
}
