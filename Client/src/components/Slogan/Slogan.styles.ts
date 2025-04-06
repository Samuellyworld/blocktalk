import styled from "styled-components";

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

    h1 {
     font-size: 32px;
     font-weight: 600;
     color: var(--block-white);
     text-align: center;
     letter-spacing: -2%;
     margin-bottom: 20px;

    }

    p {
        font-size: 18px;
        font-weight: 300;
        color: var(--block-gray);
        text-align: center;
        margin-bottom: 30px;
 }
`;