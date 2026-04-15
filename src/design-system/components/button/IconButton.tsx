import type { FunctionComponent } from 'react';
import type { ButtonProps } from './Button.tsx';
import { Button } from './Button.tsx';

export const IconButton: FunctionComponent<Omit<ButtonProps, 'iconOnly'>> = (
	props,
) => <Button {...props} iconOnly />;
