import { useRef } from "react";
import './App.css';

function App() {
  const iframeEl = useRef(null);

  return (
    <iframe
      ref={iframeEl}
      className="chatbot-iframe"
      title="Chat bot"
      frameBorder="0"
      src="http://localhost:3002/"
    />
  );
}

export default App;
