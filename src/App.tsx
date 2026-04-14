import { Navbar } from './components/navbar/Navbar.tsx';
import { Projects } from './components/sections/featured-projects/Projects.tsx';
import { Hero } from './components/sections/hero/Hero.tsx';
import { Skills } from './components/sections/skills/Skills.tsx';

export const App = () => (
	<>
		<Navbar />
		<main>
			<Hero />
			<Projects />
			<Skills />
		</main>
	</>
);
