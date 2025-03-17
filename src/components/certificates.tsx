import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useLang } from '../langs';
import { Section } from './section';
import cert1 from '../assets/images/cert1_eng.jpg';
import cert2 from '../assets/images/cert2_eng.jpg';
import cert1ru from '../assets/images/cert1_ru.jpg';
import cert2ru from '../assets/images/cert2_ru.jpg';
import { useState } from 'react';
import { CertificateModal } from './modals/certificate-modal';

export const Certificates = observer(() => {
    const lang = useLang();
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState('');

    const openModal = (img: string) => {
        setImg(img);
        setModal(true);
    };
    return (
        <Section
            cn="flex-column centered-align"
            id="certificates"
            title={lang.certificates}
        >
            {modal && (
                <CertificateModal image={img} onClose={() => setModal(false)} />
            )}
            <Wrapper>
                <Item onClick={() => openModal(cert1)} src={cert1} alt="" />
                <Item onClick={() => openModal(cert2)} src={cert2} alt="" />
                <Item onClick={() => openModal(cert1ru)} src={cert1ru} alt="" />
                <Item onClick={() => openModal(cert2ru)} src={cert2ru} alt="" />
            </Wrapper>
        </Section>
    );
});

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 24px;
    margin-top: 32px;
    @media screen and (max-width: 768px) {
        gap: 12px;
    }
`;
const Item = styled.img`
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
`;
