import styled, { keyframes } from 'styled-components';
import config from '../config';

export const Stack = () => (
    <Wrapper className="flex">
        {config.stack.map(e => (
            <String key={e}>{e}</String>
        ))}
    </Wrapper>
);

const stackflow = keyframes`
    0% {
        transform: translateY(35%);
    }
    100% {
        transform: translateY(-100%);
    }
`;

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    animation-name: ${stackflow};
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    flex-direction: column;
    z-index: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const String = styled.p`
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: white;
    opacity: 0.5;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
