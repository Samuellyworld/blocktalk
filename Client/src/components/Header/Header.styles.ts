import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0;

    h1 {
        font-size:  18px;
        font-weight: 700;
        color : var(--block-white);
        letter-spacing: -4%;
        margin-bottom: 30px;
    }
    `;