import './App.css';
import SecretMessage from './components/SecretMessage/SecretMessage';
import { useState } from 'react';

function App() {

  const [disableButton, setDisableButton] = useState(false);
  const [secretOpacity, setSecretOpacity] = useState({opacity: 0.0});

  const secretMessage = 'This is a secret message...';

  const showSecretHandler = () =>{
      setDisableButton(true);
      setSecretOpacity({opacity:1});
  }

  return (
    <>
      <SecretMessage secretMessage={secretMessage} opacity={secretOpacity}/>
      <button onClick={showSecretHandler} disabled={disableButton}>Show secret</button>
    </>
  );
}

export default App;
