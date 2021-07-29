export type ChatBotIFrameProps = {
  color: string;
}

export const ChatBotIFrame = ({ color }: ChatBotIFrameProps) => {
  return (<iframe
    frameBorder="0"
    title="Chat bot"
    className="chatbot-iframe"
    src={`http://localhost:3002/${btoa(color)}`}
  />)
};

export default ChatBotIFrame;
