import SecretMessage from '../SecretMessage/SecretMessage';
import { useState } from 'react';

function SecretSection(props) {

    const [disableButton, setDisableButton] = useState(false);
    const [secretOpacity, setSecretOpacity] = useState({opacity: 0.0});


    const showSecretHandler = () =>{
        setDisableButton(true);
        setSecretOpacity({opacity:1});
    }

    return (
        <>
            <SecretMessage secretMessage={props.secretMessage} opacity={secretOpacity}/>
            <button onClick={showSecretHandler} disabled={disableButton}>Show secret</button>
        </>
    );
}

export default SecretSection;
