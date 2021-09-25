import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const [color, setColor] = useState("#e66465");
  const [src, setSrc] = useState(`http://localhost:3002/?color=${color}`);


  /**
	* @function updateStateValues
	* @desc Update the color state and src state value with picked color
	* @param {string} color color picked using pallette
	* @private
	*/
  const _updateStateValues = (color : string) => {
    setColor((prevColor) => color);
    //---------- *Improvements[1] --------------
    setSrc((prevSrc) => `http://localhost:3002/?color=${color}`);
  }

  /**
	* @function handleColorChange
	* @desc Handler for color change event
	* @param {HTMLInputElement} e change event with the target of what element changed
	* @private
	*/
  const _handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    _updateStateValues(e.target.value);
    //---------- *Improvements[3] --------------

    /*
    Pushing the color picked to the url itself, so that, during refresh, 
    the value from color param can be used to set the state.
    In this case, during refresh, the color will remain as is.
    */
    history.push({
      search: `?color=${e.target.value}`
    });
  };

  useEffect(() => {
    //---------- *Improvements[4] --------------

    /*
    Use location hook to get the color picked earlier and setting the states.
    Now the back button of the browser will also have the histroies of what color picked.
    */
    if(location.search !== ""){
      const value = document.URL.split("color=")[1];
      if(value !== ""){
        _updateStateValues(value);
      }
    }
  },[location.search]);

  return (
    <>
      <ColorPicker
        value={color}
        onChange={_handleColorChange}
      />
      <ChatBotIFrame key={src} src={src}/>
    </>
  );
}

export default App;
