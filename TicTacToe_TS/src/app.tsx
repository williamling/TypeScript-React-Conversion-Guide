import * as React from "react";
import { render } from "react-dom";
import { Board } from "./Board";
import { RestartBtn } from "./RestartBtn";
import { GameStateBar } from "./GameStateBar";
import { GameState } from "./constants";
import * as styles from './style.css';
import * as cx from 'classnames';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.app}> 
                <Board 
                    styles={styles} 
                /> 
                <div>
                    <span className={cx(styles.description, {[styles.t1]: true})}> Player(X) </span>                
                    <span className={cx(styles.description, styles.t2)}> Computer(O) </span>
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
