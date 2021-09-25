interface ChatBotIFrameProps {
  src: string;
}

export const ChatBotIFrame = ({src} : ChatBotIFrameProps) => {
  return ( <iframe
    frameBorder="0"
    title="Chat bot"
    className="chatbot-iframe"
    src={src}
  />)
};

export default ChatBotIFrame;
