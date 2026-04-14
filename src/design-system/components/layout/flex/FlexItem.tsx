import type { ReactNode } from 'react';

export const FlexItem = ({
	children,
	grow,
}: {
	children: ReactNode;
	grow?: number;
}) => <div style={{ flexGrow: grow }}>{children}</div>;
