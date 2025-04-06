//@ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import {
    ChatWrapper,
    MessageList,
    MessageInputContainer,
    MessageInput,
    SendButton,
    ClearButton,
    MyMessage,
    OtherMessage,
    MessageText,
    MessageActions,
    ActionButton,
    MessageOptions,
    OptionsButton
} from './Message.styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { messageAPI } from '@/services/protected/messageAPI';

interface Message {
    failed: any;
    id: string;
    text: string;
    isMine: boolean;
    timestamp: Date;
    // Flag to identify locally added messages vs server messages
    isLocalOnly?: boolean;
}

const ChatContainer = ({
  message,
  createMessage
}: {
    message: any,
    createMessage : any
}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [lastFetchTime, setLastFetchTime] = useState<number>(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const user = useSelector((user: RootState) => user.user.currentUser);
    
    // Initial load of messages
    useEffect(() => {
        if (message?.messages?.length > 0) {
            const structuredMessages = message.messages.map((msg: any) => ({
                id: msg.timestamp || Date.now().toString(),
                text: msg.message,
                isMine: msg.sender === user?.wallet,
                timestamp: new Date(msg.timestamp)
            }));
            
            setMessages(currentMessages => {
                // Keep locally added messages that aren't in the server response yet
                const localMessages = currentMessages.filter(msg => 
                    msg.isLocalOnly && !structuredMessages.some((serverMsg: { text: string; isMine: boolean; }) => 
                        serverMsg.text === msg.text && 
                        serverMsg.isMine === msg.isMine
                    )
                );
                
                // Combine server messages with any pending local messages
                return [...structuredMessages, ...localMessages];
            });
            
            // Update last fetch time
            setLastFetchTime(Date.now());
        }
    }, [message, user?.wallet]);
    
    // Polling for updates
    useEffect(() => {
        if (!user?.wallet || !message.receiver_id) return;
        
        const fetchMessages = async () => {
            try {
                const updatedConversation = await messageAPI.getMessages(user.wallet, message.receiver_id);
                
                if (updatedConversation?.messages?.messages?.length > 0) {
                
                    const structuredMessages = updatedConversation.messages.messages.map((msg: any) => ({
                        id: msg.timestamp || Date.now().toString(),
                        text: msg.message,
                        isMine: msg.sender === user?.wallet,
                        timestamp: new Date(msg.timestamp)
                    }));
                    
                    setMessages(currentMessages => {
                        // Keep locally added messages that aren't in the server response yet
                        const localMessages = currentMessages.filter(msg => 
                            msg.isLocalOnly && !structuredMessages.some((serverMsg: { text: string; isMine: boolean; }) => 
                                serverMsg.text === msg.text && 
                                serverMsg.isMine === msg.isMine
                            )
                        );
                        
                        // Combine server messages with any pending local messages
                        return [...structuredMessages, ...localMessages];
                    });
                    
                    // Update last fetch time
                    setLastFetchTime(Date.now());
                }
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };
        
        // Set up polling every 3 seconds
        const interval = setInterval(fetchMessages, 3000);
        
        // Clean up on unmount
        return () => clearInterval(interval);
    }, [user?.wallet, message.receiver_id]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const messageText = inputValue.trim();
        const timestamp = new Date();
        
        // Create a temporary local message
        const newLocalMessage: Message = {
            id: `local_${Date.now()}`,
            text: messageText,
            isMine: true,
            timestamp: timestamp,
            isLocalOnly: true // Mark as locally added
            ,
            failed: undefined
        };

        // Add to state immediately for better UX
        setMessages(prevMessages => [...prevMessages, newLocalMessage]);
        setInputValue('');

        try {
            // Prepare message for the server
            const structuredMessage = {
                sender: user?.wallet,
                message: messageText,
                timestamp: timestamp
            };

            // Send to server
            await createMessage(user?.wallet, message.receiver_id, structuredMessage);
            
            // Note: We don't need to update messages here as the polling will 
            // eventually sync with the server and remove the isLocalOnly flag
        } catch (error) {
            console.error('Failed to send message:', error);
            
            // Optionally indicate the message failed to send
            setMessages(prevMessages => 
                prevMessages.map(msg => 
                    msg.id === newLocalMessage.id 
                        ? { ...msg, failed: true } 
                        : msg
                )
            );
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <ChatWrapper>
            <MessageList>

                {messages?.length === 0 && (
                    <div className="no-messages">
                        <p style={{
                            fontSize: '16px',
                            color: 'var(--block-gray)',
                            textAlign: 'center',
                            marginTop: '12px'
                        }}>No messages yet. Start the conversation!</p>
                    </div>
                )}

                {messages?.length > 0 && messages.map((message) => (
                    message.isMine ? (
                        <MyMessage key={message.id}>
                            <MessageText>{message.text}</MessageText>
                            {message.isLocalOnly && <small style={{ fontSize: '10px', opacity: 0.6 }}>Sending...</small>}
                            {message.failed && <small style={{ fontSize: '10px', color: 'red' }}>Failed to send</small>}
                        </MyMessage>
                    ) : (
                        <OtherMessage key={message.id}>
                            <MessageText>{message.text}</MessageText>
                        </OtherMessage>
                    )
                ))}
                <div ref={messagesEndRef} />
            </MessageList>

            <MessageInputContainer>
                <MessageActions>
                    <ActionButton type="button" aria-label="Attach file">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.44 11.05l-9.19 9.19a6.003 6.003 0 01-8.49-8.49l9.19-9.19a4.002 4.002 0 015.66 5.66l-9.2 9.19a2.001 2.001 0 01-2.83-2.83l8.49-8.48"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ActionButton>
                    <ActionButton type="button" aria-label="More options">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ActionButton>
                </MessageActions>

                <MessageInput
                    placeholder="Message"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <OptionsButton>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </OptionsButton>
            </MessageInputContainer>
        </ChatWrapper>
    );
};

export default ChatContainer;