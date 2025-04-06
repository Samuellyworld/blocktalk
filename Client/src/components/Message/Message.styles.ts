// Chat.styles.ts
import styled from 'styled-components';

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 92%;
  width: 100%;
//   background-color: #121212;
  color: white;
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  gap: 16px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
`;

export const MyMessage = styled(MessageBubble)`
  align-self: flex-end;
  background-color: #3b82f6; /* Blue for user's messages */
  color: white;
  border-bottom-right-radius: 4px;
`;

export const OtherMessage = styled(MessageBubble)`
  align-self: flex-start;
  background-color: #333; /* Dark gray for other user's messages */
  color: white;
  border-bottom-left-radius: 4px;
`;

export const MessageText = styled.p`
  margin: 0;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
//   background-color: #1a1a1a;
  border-top: 1px solid #333;
  position: relative;
`;

export const MessageInput = styled.textarea`
  flex: 1;
  background-color: #333;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  padding: 12px 40px 12px 12px;
  resize: none;
  outline: none;
  min-height: 46px;
  max-height: 120px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const MessageActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const SendButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 50%;
  color: white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 12px;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 4px;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const MessageOptions = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const OptionsButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ActionButtonText = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #333;
`;

export const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;