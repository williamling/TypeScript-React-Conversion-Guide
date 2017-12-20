import * as React from "react";
import { render } from "react-dom";
import { Board } from "./Board";
import { RestartBtn } from "./RestartBtn";
import { GameStateBar } from "./GameStateBar";
import { GameState } from "./constants";

import * as styles from './style.css';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.app}> 
                <Board 
                    styles={styles} 
                /> 
                <div>
                    <span className={styles.t1}> Player(X) </span>                
                    <span className={styles.t2}> Computer(O) </span>
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
