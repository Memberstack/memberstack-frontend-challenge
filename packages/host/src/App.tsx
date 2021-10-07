import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';
import {useState,useEffect} from 'react';

const App = () => {
  //seting color picker value
  const [colorPickerVal,setColorPickrState]=useState("#e66465");

   //useEffect hook to use the local storage and retain that even in refresh
  useEffect(() => {
    const clr= localStorage.getItem('bg');
    if (clr) {
      document.getElementsByTagName('iframe')[0].style.background = clr;
      setColorPickrState(clr);

    }
 }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setting local storage with current color
    localStorage.setItem('bg', e.target.value); 

    //finding element with tag and assign class background 
    let frame=document.getElementsByTagName('iframe')[0];
     frame.style.background=e.target.value?e.target.value:'#e66465';
    setColorPickrState(e.target.value);
  };

  return (
    <>
      <ColorPicker
        value={colorPickerVal}
        onChange={handleColorChange}
      />
      <ChatBotIFrame />
    </>
  );
}

export default App;
