import styled from 'styled-components';
import btn from '../assets/images/up.png';
import { ScrollToSmooth } from '../utils/helpers';

export const GoUpBtn = () => {
    return (
        <>
            <Img
                onClick={() => ScrollToSmooth('#top')}
                src={btn}
                alt="Go to top"
            />
        </>
    );
};

const Img = styled.img`
    width: 30px;
    position: fixed;
    bottom: 40px;
    right: 30px;
    z-index: 200;
    cursor: pointer;
`;
