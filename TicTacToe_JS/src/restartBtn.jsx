import React from "react";
import style from './style.css';

export class RestartBtn extends React.Component {

    // Fire a global event notifying restart of game
    handleClick(e) {
        var event = document.createEvent("Event");
        event.initEvent("restart", false, true); 
        window.dispatchEvent(event);
    }
    
    render() {
        return <a href="#" className={style.restartBtn} onClick={e => this.handleClick(e)}>
            Restart 
        </a>;
    }
} 
