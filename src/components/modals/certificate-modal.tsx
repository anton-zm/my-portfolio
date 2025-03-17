import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Modal } from './modal';

type IProps = {
    onClose: () => void;
    image: string;
};

export const CertificateModal = observer(({ onClose, image }: IProps) => (
    <Modal onClose={onClose}>
        <Img src={image} alt="certificate" />
    </Modal>
));

const Img = styled.img`
    width: 100%;
`;
