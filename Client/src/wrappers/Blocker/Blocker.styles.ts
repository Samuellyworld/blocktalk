import styled from "styled-components";

export const BlockerContainer = styled.div`
  display: flex;
   width: 100%;


  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
  .blocker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 40px;
    width: 100%;
    margin: auto;


  .blocker-inner {
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    background: rgba(10, 15, 29, 1);
    border-radius: 12px;

    div {
    justify-content: center;
    }

    .final {
    font-size: 20px;
    font-weight: 500;
    }

    .-gold{
      color: var(--block-gold);
      }

    .little-text {
      font-size: 14px;
    }

    .qr-code {
    margin-bottom: 20px;
    }
    .button- {
    margin: 20px 0px;
    }

}
}
    `;