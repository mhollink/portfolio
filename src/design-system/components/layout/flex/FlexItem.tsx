import type { FunctionComponent, PropsWithChildren } from 'react';

type FlexItemProps = PropsWithChildren<{ grow?: number }>;

export const FlexItem: FunctionComponent<FlexItemProps> = ({
	children,
	grow,
}) => <div style={{ flexGrow: grow }}>{children}</div>;
