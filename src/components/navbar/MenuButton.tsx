import type { FunctionComponent } from 'react';

export type MenuButtonProps = {
	setOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
};

export const MenuButton: FunctionComponent<MenuButtonProps> = ({ setOpen }) => (
	<button
		className="navbar__menu-button"
		onClick={() => setOpen((prev) => !prev)}
		type="button"
	>
		<span />
		<span />
		<span />
	</button>
);
