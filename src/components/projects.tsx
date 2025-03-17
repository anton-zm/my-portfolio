import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useLang } from '../langs';
import { projects } from '../store/projects';
import { Project } from '../types';
import { ProjectCard } from './project-card';
import { Section } from './section';

export const Projects = observer(() => {
    const lang = useLang();
    return (
        <Section
            id="projects"
            cn="flex-column centered-align"
            title={lang.projects}
        >
            <Grid>
                {projects.map((e: Project) => (
                    <ProjectCard project={e} key={e.img} />
                ))}
            </Grid>
        </Section>
    );
});

const Grid = styled.div`
    margin-top: 52px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;

    @media screen and (max-width: 890px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 490px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
