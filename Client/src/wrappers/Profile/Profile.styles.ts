import styled from "styled-components";

export const ProfileContainer = styled.div`
   display : flex;
   flex-direction : column;
   align-items : center;
   padding : 0px 40px

   @media screen and (max-width: 768px) {
      padding : 0px 10px;
}

.icon- {
  margin-top: 5px;
  margin-right: 3px;
}
  
  .profile-inner {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;

    .divider- {
      margin: 30px 0px;
      width: 400px;

      @media screen and (max-width: 768px) {
        width: 90%;
      }
   }

  .profile-update {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;

    .update-gray {
      color : var(--block-gray);
      font-size: 14px;
      font-weight: 400;
      margin: 20px 0px;
      text-align: center;
    }
    .input-container {
     display : flex;
     flex-direction: column;
     gap: 20px;
     align-items: center;

     .username, .amount {
       display: flex;
       gap: 50px;
       width: 100%;
       align-items: center;
     }
    } 

    .block-talk-io {
      color: var(--block-white);
      font-size: 14px;
      font-weight: 500;
}
    
};
  
`