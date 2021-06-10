import classes from "./SecretMessage.module.css";

const SecretMessage = function(props) {
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    return <marquee direction="right" className={classes['my-secret']} style={props.opacity}>
        <div>
            <h1>{props.secretMessage}</h1>
        </div>
    </marquee>;
}

export default SecretMessage;