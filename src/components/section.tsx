import { ReactNode } from 'react';
import styled from 'styled-components';
import { Content } from './content-wrapper';

const Wrapper = styled.section`
    background-color: transparent;
    width: 100%;
    padding: 2rem 0;
    position: relative;
`

type IProps = {
    children: ReactNode,
    cn?: string,
    id?: string
}

export const Section = ({children, cn, id}:IProps) => {
    return (
        <Wrapper id={id}>
            <Content className={cn || ''}>{children}</Content>
        </Wrapper>
    )
}