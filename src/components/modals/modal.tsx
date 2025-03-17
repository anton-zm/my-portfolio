import styled from 'styled-components';
import close from '../../assets/images/close.png';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

type IProps = {
    onClose: () => void;
    children: ReactNode;
};

export const Modal = observer(({ onClose, children }: IProps) => {
    return (
        <Overlay
            className="flex centered overlay"
            onClick={e => {
                if ((e.target as Element).classList.contains('overlay')) {
                    onClose();
                }
            }}
        >
            <Popup>
                <CloseIcon src={close} onClick={onClose} />
                {children}
            </Popup>
        </Overlay>
    );
});

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99999;
`;
const Popup = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 1rem;
    width: 60%;
    position: relative;

    @media screen and (max-width: 1200px) {
        width: 80%;
    }
`;
const CloseIcon = styled.img`
    position: absolute;
    top: -30px;
    right: -30px;
    cursor: pointer;
`;
