import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding: 20px 20px;
  gap: 20px;
justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 6px;
    gap: 10px;
  }

    .sidebar-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        h1 {
            font-size:  18px;
            font-weight: 700;
            color : var(--block-white);
            letter-spacing: -4%;
            margin: 10px 0px;
        }

        .search-input {
          width: 200px;
        }
        
        .chats- {
            font-size: 12px;
            font-weight: 300;
            color: rgba(206, 207, 210, 1);
            margin-top: 10px;
        }
        .button- {
            padding : 5px 0px;
            color : var(--block-gray);
            align-items: unset;
            justify-content: unset;
            height: fit-content !important;

            button,div {
            align-items: unset;
            justify-content: unset;
            padding : 0px 0px;
            height: fit-content !important;
            }

        }

    }
    .user-logined {
        display: flex;
        flex-direction: column;
        gap: 2px;
        width: 100%;


        p {
            font-size: 14px;
            font-weight: 500;
        color: var(--block-white);
        }
        span {
            font-size: 12px;
            font-weight: 300;
            color: rgba(206, 207, 210, 1);
        }
    }
`;
