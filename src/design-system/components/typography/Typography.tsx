import type { CSSProperties, ElementType, ReactNode } from 'react';
import { theme } from '~/design-system/theme.ts';

export type Variant = 'body' | 'caption' | 'h1' | 'h2' | 'h3';

const variantMap: Record<Variant, ElementType> = {
	body: 'p',
	caption: 'caption',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
};

export const Typography = ({
	variant = 'body',
	children,
	style,
	className,
}: {
	variant?: Variant;
	children: ReactNode;
	style?: CSSProperties;
	className?: string;
}) => {
	const Component = variantMap[variant];

	return (
		<Component
			style={{
				...getVariantStyle(variant),
				...style,
			}}
			className={className}
		>
			{children}
		</Component>
	);
};

function getVariantStyle(variant: Variant): CSSProperties {
	const heading = {
		background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
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
				display: 'block',
			};
		default:
			return {
				fontSize: theme.typography.sizes.sm,
				color: theme.colors.text,
			};
	}
}
