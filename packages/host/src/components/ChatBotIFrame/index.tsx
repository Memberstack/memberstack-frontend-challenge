import React, { useRef }from 'react'
import { useHandlePostValue } from '../../hooks/useHandlePostValue';
interface ColorProps {
  value: string;
}

const ChatBotIFrame = ({ value }: ColorProps) => {
  const iframeRef =  useRef<HTMLIFrameElement>(null);

  const { handlePostValue } = useHandlePostValue(iframeRef, value)

  return (
    <iframe
      ref={iframeRef}
      frameBorder="0"
      title="Chat bot"
      className="chatbot-iframe"
      src="http://localhost:3002/"
      onLoad={handlePostValue}
    />
  );
}

export default ChatBotIFrame;
