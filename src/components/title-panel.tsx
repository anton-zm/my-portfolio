import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useLang } from "../langs"
import { Section } from "./section"

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
const SubTitle = styled.h2`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-top: 24px;
    font-weight: 100;
`
const Stack = styled.p`
    position: absolute;
    top: 70px;
    left: 100px;
    font-weight: bold;
    font-size: 55px;
    transform: rotate(-15deg);
    opacity: 0.08;
`

export const TitlePanel = observer(() => {
    const lang = useLang()
    return (
        <Section>
            <PanelWrapper className="flex-column centered">
                <Title className="banner__title">{lang.portfolio}</Title>
                <SubTitle className="banner__subtitle">{lang.web_dev}</SubTitle>
                {/* <Stack className="banner__stack">
                    JavaScript HTML5 CSS3 Vue.js Nuxt.js NPM Webpack Git BEM Grid Flexbox
                    Express.js MongoDB GitHub Figma Node.js Responsive Jest REST API React MobX 
                    React Native Android Studio Styled Components TypeScript Yarn 
                </Stack> */}
            </PanelWrapper>
        </Section>
    )
})