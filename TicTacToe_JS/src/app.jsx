import React from "react";
import { render } from "react-dom";
import { Board } from "./board";
import { RestartBtn } from "./restartBtn";
import { GameStateBar } from "./gameStateBar";
import cx from 'classnames';
import style from './style.css';

class App extends React.Component {
    render() {
        return (
            <div className={style.app}> 
                <Board /> 
                <div>
                    <span className={cx(style.description,style.t1)}> Player(X) </span>                
                    <span className={cx(style.description,style.t2)}> Computer(O) </span>
                </div>
                <RestartBtn />
                <GameStateBar />              
            </div> 
        )
    }
}

render(
    <App />, document.getElementById("content")
);
