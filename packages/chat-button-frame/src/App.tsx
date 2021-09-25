import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect} from 'react';

function App() {

  const [color, setColor] = useState("")

  useEffect(() => {
    const value = document.URL.split("color=")[1];
    setColor((prevValue) => value);
    //---------- *Improvements[2] --------------
  });

  return (
    <div className="App">
      <div className="chat-icon">
        <FontAwesomeIcon icon={faCommentDots} size='2x' color={color}/>
        {/* <img src={logo} className="chat-icon-image" alt="logo" /> */}
      </div>
    </div>
  );
}

export default App;
