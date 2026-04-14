import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '~/design-system';

const sections = [
	{ label: 'Projects', id: 'projects' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Experience', id: 'experience' },
	{ label: 'About', id: 'about' },
	{ label: 'Contact', id: 'contact' },
];

export function Navbar() {
	const [active, setActive] = useState('projects');
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 120;

			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (!el) continue;

				if (
					scrollPosition >= el.offsetTop &&
					scrollPosition < el.offsetTop + el.offsetHeight
				) {
					setActive(section.id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
							className={classNames(`navbar__link`, {
								'navbar__link--active': active === section.id,
							})}
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
}

type MenuButtonProps = {
	setOpen: (prevState: boolean) => void;
};

function MenuButton({ setOpen }: MenuButtonProps) {
	return (
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
}

function LanguageButton() {
	const { i18n } = useTranslation();
	return (
		<button
			className="navbar__language"
			onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'nl' : 'en')}
			type="button"
		>
			<img
				src={
					i18n.language === 'en'
						? '/images/flags/en.svg'
						: '/images/flags/nl.svg'
				}
				alt="Switch language"
			/>
		</button>
	);
}
