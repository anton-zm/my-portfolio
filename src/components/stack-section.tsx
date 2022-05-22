import styled from "styled-components"
import config from "../config"
import { Section } from "./section"

const Wrapper = styled.div`
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding: 2rem 0 1.125rem;
`
const Item = styled.p`
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    margin-bottom: 10px;

    :not(:last-child):after {
        content: '|';
        margin-left: 10px;
        margin-right: 10px;
    }
    
`

export const StackSection = () => {
    return (
        <Section id="stack">
            <Wrapper className="flex-row wrap">
                {config.stack.map(e => (
                    <Item key={e}>{e}</Item>
                ))}
            </Wrapper>
        </Section>
    )
}