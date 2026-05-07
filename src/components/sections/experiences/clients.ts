export type Project = {
	title: string;
	description: string;
	technologies: string[];
};

export type Client = {
	company: string;
	role: string;
	start: Date;
	end?: Date;
	description: string;
	projects: Project[];
};

export const clients: Client[] = [
	{
		company: 'DICTU & RvIG',
		role: 'Fullstack Senior Engineer / Tech Lead, Scrum Master',
		start: new Date(2023, 8),
		description: 'rvig.description',
		projects: [
			{
				title: 'RNI Vooraanmelding',
				description: 'rvig.projects.vooraanmelding',
				technologies: [
					'React',
					'Java 21',
					'Spring Boot',
					'Jakarta EE',
					'Kubernetes',
					'Helm',
				],
			},
			{
				title: 'RNI Portal',
				description: 'rvig.projects.portal',
				technologies: [
					'React',
					'Java 21',
					'Spring Boot',
					'Jakarta EE',
					'Spring-WS',
					'Kubernetes',
					'Helm',
					'Ansible',
				],
			},
			{
				title: 'Authorization Gateway',
				description: 'rvig.projects.agw',
				technologies: [
					'Java 21',
					'Spring Cloud Gateway',
					'OAuth2',
					'JPA',
					'Redis',
				],
			},
			{
				title: 'Routeringsvoorziening',
				description: 'rvig.projects.rv',
				technologies: ['Java 21', 'Spring Boot', 'JPA', 'JPMS'],
			},
			{
				title: 'Email verificatie',
				description: 'rvig.projects.email',
				technologies: [
					'Java 21',
					'Spring Boot',
					'OAuth2',
					'Nimbus-JOSE + JWT',
					'JWE',
				],
			},
		],
	},
	{
		company: 'Bol.com',
		role: 'Fullstack software engineer',
		start: new Date(2021, 10),
		end: new Date(2023, 8),
		description: 'bol.description',
		projects: [
			{
				title: 'Product Catalog',
				description: 'bol.projects.pcs',
				technologies: [
					'Angular',
					'Kotlin',
					'Spring boot',
					'Google Cloud Platform',
				],
			},
			{
				title: 'Match Maker',
				description: 'bol.projects.matchmaker',
				technologies: [
					'React',
					'Kotlin',
					'Spring Boot',
					'GraphQL',
					'Google Cloud Platform',
				],
			},
		],
	},
	{
		company: 'SVB',
		role: 'Frontend engineer',
		start: new Date(2020, 5),
		end: new Date(2021, 9),
		description: 'svb.description',
		projects: [
			{
				title: 'MAF',
				description: 'svb.projects.maf',
				technologies: ['Angular', 'Express'],
			},
		],
	},
	{
		company: 'KPN',
		role: 'Fullstack software engineer',
		start: new Date(2018, 0),
		end: new Date(2020, 5),
		description: 'kpn.description',
		projects: [
			{
				title: 'KPN Solutions',
				description: 'kpn.projects.solutions',
				technologies: ['AngularJS', 'Cumulocity'],
			},
			{
				title: 'KPN Things',
				description: 'kpn.projects.things',
				technologies: ['Java 8', 'Spring Boot', 'React', 'Kubernetes'],
			},
		],
	},
];
