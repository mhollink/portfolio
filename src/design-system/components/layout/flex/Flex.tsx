import type {
	CSSProperties,
	FunctionComponent,
	PropsWithChildren,
} from 'react';
import { theme } from '~design-system/theme.ts';

export type FlexProps = PropsWithChildren<{
	direction?: 'row' | 'column';
	gap?: keyof typeof theme.spacing;
	align?: CSSProperties['alignItems'];
	justify?: CSSProperties['justifyContent'];
	margin?: CSSProperties['margin'];
	wrap?: boolean;
}>;

export const Flex: FunctionComponent<FlexProps> = ({
	children,
	direction = 'row',
	gap = 'md',
	align = 'stretch',
	justify = 'flex-start',
	margin,
	wrap = false,
}) => (
	<div
		style={
			{
				display: 'flex',
				flexDirection: direction,
				gap: theme.spacing[gap],
				alignItems: align,
				justifyContent: justify,
				flexWrap: wrap ? 'wrap' : 'nowrap',
				margin,
			} as CSSProperties
		}
	>
		{children}
	</div>
);
