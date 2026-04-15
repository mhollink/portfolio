import type {
	CSSProperties,
	FunctionComponent,
	PropsWithChildren,
} from 'react';

export type GridItemProps = PropsWithChildren<{
	span?: number;
	style?: CSSProperties;
}>;

export const GridItem: FunctionComponent<GridItemProps> = ({
	children,
	span = 12,
	style,
}) => {
	return (
		<div
			style={{
				gridColumn: `span ${span}`,
				...style,
			}}
		>
			{children}
		</div>
	);
};
