// @ts-nocheck
// App.tsx
import React from 'react';
import styled from 'styled-components';
import ChatContainer from '@/components/Message';
import Sidebar from '@/components/Sidebar';
import HorizontalLine from '@/components/HorizontalLIne';
import Slogan from '@/components/Slogan';
import QRCode from 'react-qr-code';

const ChatMessageContainer = styled.div`
  display: flex;
   width: 100%;

   .second_qr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:  auto;
    width: 800px;
    background : rgba(10, 15, 29, 1);
    padding : 20px;
    border-radius: 8px;
    }
   `

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
//   max-width: 800px;
  margin: 0 auto;
//   background-color: #121212;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #333;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  margin-right: 16px;
  cursor: pointer;
  color: white;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const UserName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const PaymentButton = styled.button`
  background-color: #f59e0b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #d97706;
  }
`;

const ChatMessage = ({
  users ,
  message,
  createMessage,
  updateWithdrawal
}: {
    users: any;
    message: any;
    createMessage: (sender: any, receiver: any, message: any) => Promise<void>;
    updateWithdrawal: () => void
}) => {
    const [isClaim, setIsClaim] = React.useState(false);

  return (
    <ChatMessageContainer>

    <Sidebar  
        users={users}
        createMessage={(sender, receiver) => createMessage( sender, receiver, null)}
    />
    <HorizontalLine />
    {
      isClaim ? 
      <div className='second_qr'>
        <Slogan
         header="Claim your payment" 
         text="Scan this lightning invoice to claim your payment"
        Qr = {<QRCode
         value={message.withdrawal_invoice}
         size={200}
         level="H"
        />}
        Button={
            <PaymentButton onClick={updateWithdrawal} style={{
                marginTop: "20px"
            }}>
                Confirm withdrawal
            </PaymentButton> 
        }
         />

       </div>
        :
    <AppContainer>
      <Header>
        <HeaderLeft>
          <MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MenuIcon>
          <UserInfo>
            <UserName>{message.receiver_name}@blocktalk.io</UserName>
          </UserInfo>
        </HeaderLeft>
        <PaymentButton onClick={() => setIsClaim(true)}>Claim payment</PaymentButton>
      </Header>
      <ChatContainer
       message={message}
       createMessage={createMessage}
       />
    </AppContainer>
      
    }

 
    </ChatMessageContainer>
  );
};

export default ChatMessage