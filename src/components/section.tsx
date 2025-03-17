import { ReactNode } from 'react';
import styled from 'styled-components';
import { Content } from './content-wrapper';

type IProps = {
    children: ReactNode;
    cn?: string;
    id?: string;
    title?: string;
};

export const Section = ({ children, cn, id, title }: IProps) => {
    return (
        <Wrapper id={id}>
            <Content className={cn || ''}>
                {title && <SectionTitle>{title}</SectionTitle>}
                {children}
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: transparent;
    width: 100%;
    padding: 2rem 0;
    position: relative;
`;
const SectionTitle = styled.h2`
    font-size: 34px;
    letter-spacing: 1px;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    text-align: center;
    font-weight: 100;
    position: relative;
    display: inline;
    padding-bottom: 10px;
    color: #ffffff;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 80%;
        height: 1px;
        background-color: #ffffff;
    }
`;
