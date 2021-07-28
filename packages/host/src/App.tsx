import ColorPicker from './components/ColorPicker';
import ChatBotIFrame from './components/ChatBotIFrame';
import './App.css';
import { ColorContext } from 'chat-button-context';
import * as React from 'react';

const App = () => {
  const { color, setColor } = React.useContext(ColorContext);

  console.log(color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <ColorPicker value={color as string} onChange={handleColorChange} />
      <ChatBotIFrame />
    </>
  );
};

export default App;
