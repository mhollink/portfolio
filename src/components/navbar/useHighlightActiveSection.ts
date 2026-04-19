import { useEffect, useState } from 'react';
import { sections } from '../../sections.ts';

export const useHighlightActiveSection = () => {
	const [active, setActive] = useState('projects');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 200;

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

	return active;
};
