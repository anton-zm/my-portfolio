import styled from "styled-components"
import { Project } from "../../types"
import { observer } from "mobx-react-lite"
import { useLang } from "../../langs"
import { useState } from "react"
import { Modal } from "./modal"

const Img = styled.img`
    max-height: 80vh;
    width: 40%;
    margin-right: 1.5rem;
    @media screen and (max-width: 768px) {
        width: 30%;
    }
    @media screen and (max-width: 550px) {
        display: none;
    }
`

const ContentWrapper = styled.div`
    flex-direction: row;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`
const Title = styled.h4`
    font-size: 2rem;
    font-weight: normal;
`
const Description = styled.p`
    margin-top: 32px;
`
const Stack = styled.p`
    margin-top: 24px;
`
const Btn = styled.button`
    border: none;
    background-color: royalblue;
    transition: 0.3s;
    cursor: pointer;
    color: white;
    padding: 10px 24px;
    border-radius: 4px;
    :hover {
        opacity: 0.8;
    }
    @media screen and (max-width: 550px) {
        width: 100%;
        margin-top: 16px;
    }
`

type IProps = {
    onClose: () => void,
    project: Project
}

export const ProjectModal = observer(({onClose, project}: IProps) => {
    const lang = useLang()
    const [nda, setNda] = useState(false)
    
    return (
        <Modal onClose={onClose}>
            <div className="flex-row w100">
                <Img src={project.img} alt={project.title} />
                <div className="flex-column w100 between">
                    <Title>{project.title}</Title>
                    <Description>{project.description}</Description>
                    <Stack>Stack: {project.stack}</Stack>
                    <ContentWrapper className="flex w100 between">
                        <Btn onClick={() => window.open(project.url)}>
                            {lang.watch}
                        </Btn>
                        <Btn 
                            onMouseOver={() => {
                                if(project.nda) setNda(true)
                            }}
                            onMouseLeave={() => {
                                if(project.nda) setNda(false)
                            }}
                            onClick={() => {
                                if(!project.nda){
                                    window.open(project.github)
                                }
                            }}
                        >
                            {nda ? lang.nda : 'GitHub'}
                        </Btn>
                    </ContentWrapper>
                </div>
            </div>
        </Modal>
    )
})