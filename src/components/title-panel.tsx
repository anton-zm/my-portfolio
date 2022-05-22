import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useLang } from "../langs"
import { Section } from "./section"
import { Stack } from "./stack"

const PanelWrapper = styled.div`
    width: 100%;
    height: 50vh;
    color: white;
    position: relative;
    overflow: hidden;
`
const Title = styled.h1`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 4rem;
    font-weight: 100;
`
const SubTitle = styled.p`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-top: 24px;
    font-weight: 100;
`

export const TitlePanel = observer(() => {
    const lang = useLang()
    return (
        <Section>
            <PanelWrapper className="flex-column centered">
                <Stack />
                <Title className="banner__title">{lang.portfolio}</Title>
                <SubTitle className="banner__subtitle">{lang.web_dev}</SubTitle>
            </PanelWrapper>
        </Section>
    )
})