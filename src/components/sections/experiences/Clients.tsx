import { useTranslation } from 'react-i18next';
import {
	type Client as ClientType,
	clients,
	type Project as ProjectType,
} from '~components/sections/experiences/clients.ts';
import { Period } from '~components/sections/experiences/Period.tsx';
import { Chip } from '~design-system/components/chip/Chip.tsx';
import { Flex } from '~design-system/components/layout/flex/Flex.tsx';
import { Typography } from '~design-system/components/typography/Typography.tsx';

interface ProjectProps {
	project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
	const { t } = useTranslation('experience', { keyPrefix: 'clients' });
	return (
		<div className="client-project">
			<Typography color="accent">{project.title}</Typography>
			<Typography>{t(project.description)}</Typography>
			<Flex gap="xs" margin="0.5rem 0 0" wrap={true}>
				{project.technologies.map((t) => (
					<Chip label={t} key={t} size="small" appearance="outlined" />
				))}
			</Flex>
		</div>
	);
};

const Client = ({ client }: { client: ClientType }) => {
	const { t } = useTranslation('experience', { keyPrefix: 'clients' });
	return (
		<div className="timeline__item">
			<div className="timeline__item__dot" />

			<div className="timeline__item__content">
				<Typography variant="h3" className="timeline__item__title">
					{client.company}
				</Typography>
				<Typography color="secondary">{client.role}</Typography>
				<Typography variant="caption" className="timelinte__item__period">
					<Period from={client.start} to={client.end} />
				</Typography>
				<Typography className="timelinte__item__description">
					{t(client.description)}
				</Typography>

				<div className="timeline__item__projects">
					{client.projects.map((p) => (
						<Project project={p} key={p.title} />
					))}
				</div>
			</div>
		</div>
	);
};

export const Clients = () => {
	return (
		<div className="timeline">
			{clients.map((client) => (
				<Client key={client.company} client={client} />
			))}
		</div>
	);
};
