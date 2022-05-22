import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useLang } from "../langs"
import { useProjectsData } from "../store/projects"
import { Project } from "../types"
import { ProjectCard } from "./project-card"
import { Section } from "./section"

const Grid = styled.div`
    
`

export const Projects = observer(() => {
    const lang = useLang()
    const projects = useProjectsData()

    return (
        <Section cn="flex-column centered-align" title={lang.projects}>
           <Grid>
               {projects.map((e: Project) => (
                   <ProjectCard project={e} key={e.img} />
               ))}
           </Grid>
        </Section>
    )
})