import type { FunctionComponent, PropsWithChildren } from 'react';
import { theme } from '~design-system/theme.ts';

export const CardFooter: FunctionComponent<PropsWithChildren> = ({
	children,
}) => (
	<div
		style={{
			padding: theme.spacing.md,
			borderTop: `1px solid ${theme.colors.border}`,
		}}
	>
		{children}
	</div>
);
