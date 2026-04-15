import { type FunctionComponent, useState } from 'react';
import { MenuButton } from '~components/navbar/MenuButton.tsx';
import { Typography } from '~design-system/components/typography/Typography.tsx';
import { sections } from '../../sections.ts';
import { LanguageButton } from './LanguageButton.tsx';
import { useHighlightActiveSection } from './useHighlightActiveSection.ts';

export const Navbar: FunctionComponent = () => {
	const active = useHighlightActiveSection();
	const [open, setOpen] = useState(false);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (!el) return;

		el.scrollIntoView({ behavior: 'smooth' });
		setOpen(false);
	};

	return (
		<header className="navbar">
			<div className="navbar__container">
				<Typography
					variant="h1"
					className="navbar__title"
					style={{ fontSize: '2rem' }}
				>
					Marcel Hollink
				</Typography>

				<nav className={`nav ${open ? 'open' : ''}`}>
					{sections.map((section) => (
						<button
							key={section.id}
							className={`navbar__link ${active === section.id ? 'navbar__link--active' : ''}`}
							onClick={() => scrollTo(section.id)}
							type="button"
						>
							{section.label}
						</button>
					))}

					<LanguageButton />
				</nav>

				<div className="navbar__actions">
					<MenuButton setOpen={setOpen} />
					<LanguageButton />
				</div>
			</div>
		</header>
	);
};
