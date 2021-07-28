export const ChatBotIFrame = () => {
  return (
    <iframe
      frameBorder={0}
      title="Chat bot"
      id="chatBot"
      className="chatbot-iframe"
      src="http://localhost:3002/"
    />
  );
};

export default ChatBotIFrame;
