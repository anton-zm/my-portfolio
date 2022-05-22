import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useLang } from "../langs"
import { Section } from "./section"
import mail from '../assets/images/email.png'
import tlg from '../assets/images/tlg.png'

const Wrapper = styled.div`
    width: 60%;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 900px){
        width: 100%;
    }
    @media screen and (max-width: 550px){
        flex-direction: column;
    }
`

const Contact = styled.p<{icon: string}>`
    color: white;
    font-size: 1.5rem;
    margin-bottom: 10px;
    ::before {
        content: ${props => `url(${props.icon})`};
        margin-right: 10px;
    }
`

export const Contacts = observer(() => {
    const lang = useLang()
    
    return (
        <Section cn="flex-column centered-align" id="contacts" title={lang.contacts}>
            <Wrapper>
                <Contact className="flex-row centered-align" icon={mail}>antonzm34@gmail.com</Contact>
                <Contact className="flex-row centered-align" icon={tlg}>@Antonzm</Contact>
            </Wrapper>
        </Section>
    )
})