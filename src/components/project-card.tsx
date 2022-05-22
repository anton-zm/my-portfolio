import { useState } from "react"
import styled from "styled-components"
import { Project } from "../types"
import { ProjectModal } from "./project-modal"

const Wrapper = styled.figure`
    cursor: pointer;
    position: relative;
        :hover > .card__title {
            visibility: visible;
            }
`
const Img = styled.img`
    width: 100%;
`
const Title = styled.figcaption`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    color: rgb(134, 130, 130);
    font-size: 32px;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-weight: 100;
    visibility: hidden;
    text-align: center;

    @media screen and (max-width: 1140px) {
        font-size: 24px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        padding: 10px;
    }
`

export const ProjectCard = ({project}:{project: Project}) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            {modal && <ProjectModal project={project} onClose={() => setModal(false)} />}
            <Wrapper onClick={() => setModal(true)}>
                <Img src={project.img} alt={project.title} />
                <Title className="card__title">{project.title}</Title>
            </Wrapper>
        </>
    )
}