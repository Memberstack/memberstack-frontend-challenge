import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../chat.png";

type ChatButtonParams = {
  color: string;
}
export const ChatButton: React.FC = () => {
  const { color: codedColor } = useParams<ChatButtonParams>();
  
  const color = useMemo(() => {
    if (codedColor) {
      try {
        return atob(codedColor);
      } catch(e) {
        console.error("Invalid color was recieved in query parameters");
      }
    }

    return '#e66465';
  }, [codedColor])

  return (
    <div className="chat-icon" style={{backgroundColor: color }}>
      <img src={logo} className="chat-icon-image" alt="logo" />
    </div>
  )
}

export default ChatButton;