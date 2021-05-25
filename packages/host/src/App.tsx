import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';

const App = () => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  };

  return (
    <>
      <ColorPicker
        value="#e66465"
        onChange={handleColorChange}
      />
      <ChatBotIFrame />
    </>
  );
}

export default App;
