import { useRef } from "react";
import './App.css';

function App() {
  const iframeEl = useRef<HTMLIFrameElement>(null);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle color change
  };

  return (
    <>
      <input
        type="color"
        value="#e66465"
        onChange={handleColorChange}
      />
      <iframe
        ref={iframeEl}
        frameBorder="0"
        title="Chat bot"
        className="chatbot-iframe"
        src="http://localhost:3002/"
      />
    </>
  );
}

export default App;
