import * as React from 'react';
import { ColorContext } from 'chat-button-context';

import logo from './chat.png';
import './App.css';

function App() {
  const { color } = React.useContext(ColorContext);

  console.log('color:::: ', color);
  React.useEffect(() => {
    console.log('color:::: ', color);
  }, [color]);

  return (
    <div className="App">
      <div className="chat-icon" style={{ backgroundColor: color }}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
