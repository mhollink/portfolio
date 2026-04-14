import type { ButtonProps } from './Button.tsx';
import { Button } from './Button.tsx';

export const IconButton = (props: Omit<ButtonProps, 'iconOnly'>) => (
	<Button {...props} iconOnly />
);
