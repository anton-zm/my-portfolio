import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

export const Footer = observer(() => {
    const Y = new Date().getFullYear();
    return (
        <Wrapper className="flex centered">
            <Text>2019 - {Y}</Text>
        </Wrapper>
    );
});

const Wrapper = styled.footer`
    width: 100%;
    padding: 2.5rem 0;
    border-top: 2px solid white;
`;
const Text = styled.p`
    color: white;
    font-size: 1.125rem;
`;
