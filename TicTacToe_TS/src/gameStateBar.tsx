import * as React from "react";
import { GameState } from "./constants";
import * as styles from './style.css';

interface GameStateBarState {
    gameState: GameState;    
}

export class GameStateBar extends React.Component<{}, GameStateBarState> {
    
    constructor(props: {}) {
        super(props);
        this.state = {gameState: ""};
    }
    
    private handleGameStateChange(e: CustomEvent) {
        this.setState({gameState: e.detail});
    }
  
    private handleRestart(e: Event) {
        this.setState({gameState: ""});
    }
  
    componentDidMount() {
        window.addEventListener("gameStateChange", (e: CustomEvent) => this.handleGameStateChange(e));
        window.addEventListener("restart", (e: CustomEvent) => this.handleRestart(e));
    }

    componentWillUnmount() {
        window.removeEventListener("gameStateChange", (e: CustomEvent) => this.handleGameStateChange(e));
        window.removeEventListener("restart", (e: CustomEvent) => this.handleRestart(e));
    }
    
    render() {
        return (
            <div className={styles.gameStateBar}> {this.state.gameState} </div> 
        )
    }
}   
