import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';
import { useEffect, useState } from "react";

const App = () => {
  const [color, setColor] = useState('');
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    window.sessionStorage.setItem('color', selectedColor);
  };

  useEffect(() => {
    const storedColor = window.sessionStorage.getItem('color');
    const colorToSet = storedColor ?? '#e66465';

    setColor(colorToSet);
  }, [])


  return (
    <>
      <ColorPicker
        value={color}
        onChange={handleColorChange}
      />
      <ChatBotIFrame color={color}/>
    </>
  );
}

export default App;
