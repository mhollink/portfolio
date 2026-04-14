import type { ReactNode } from 'react';

export const GridItem = ({
	children,
	span = 12,
	style,
}: {
	children: ReactNode;
	span?: number;
	style?: CSSProperties;
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
