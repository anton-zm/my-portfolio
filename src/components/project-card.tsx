import { useState } from 'react';
import styled from 'styled-components';
import { Project } from '../types';
import { ProjectModal } from './modals/project-modal';
import { store } from '../store';

export const ProjectCard = ({ project }: { project: Project }) => {
    const [modal, setModal] = useState(false);
    const title = project.title[store.Lang];

    return (
        <>
            {modal && (
                <ProjectModal
                    project={project}
                    onClose={() => setModal(false)}
                />
            )}
            <Wrapper onClick={() => setModal(true)}>
                <Img src={project.img} alt={title} loading='lazy' />
                <Title className="card__title">{title}</Title>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.figure`
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    :hover > .card__title {
        opacity: 1;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
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
    opacity: 0;
    text-align: center;
    transition: opacity 0.3s;

    @media screen and (max-width: 1140px) {
        font-size: 24px;
    }
    @media screen and (max-width: 600px) {
        font-size: 18px;
        padding: 10px;
    }
`;
