import type { FunctionComponent } from 'react';
import { About } from '~components/sections/about/About.tsx';
import { Contact } from '~components/sections/contact/Contact.tsx';
import { Experiences } from '~components/sections/experiences/Experiences.tsx';
import { Projects } from '~components/sections/projects/Projects.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { Hero } from './components/sections/hero/Hero.tsx';

export const App: FunctionComponent = () => (
	<>
		<Navbar />
		<main>
			<Hero />
			<Projects />
			<Experiences />
			<About />
			<Contact />
		</main>
	</>
);
