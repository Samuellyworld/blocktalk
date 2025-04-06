import styled from 'styled-components';


export const SplashContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--block-black);

    .splash-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 40px 20px;

        .splash-button {
            margin-bottom: 50px ;
            line-spacing: -1% !important;
            font-size: 16px !important;
            font-weight: 600 !important;
        }

        @media (max-width: 768px) {
            padding: 40px 10px;
        }

        .splash-image {
            width: 100% !important;
            height: 500px;

            
            @media (max-width: 768px) {
               height : fit-content;
}

`;