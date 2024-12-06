// SGN
import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false, // Determines if the ball should be rendered
            posi: 0, // Tracks the ball's numeric position
            ballPosition: { left: "0px" } // Tracks the ball's CSS `left` position
        };
        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this); // Correctly bind the method
    }

    // Handles the Right Arrow key press
    handleKeyDown(e) {
        if (e.key === "ArrowRight") {
            this.setState((prevState) => {
                const newPos = prevState.posi + 5; // Increment position by 5px
                return {
                    posi: newPos,
                    ballPosition: { left: `${newPos}px` } // Update CSS position
                };
            });
        }
    }

    // Handles the Start button click
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Adds the event listener
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    // Removes the event listener to avoid memory leaks
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    // Decides whether to render the ball or the Start button
    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return (
                <button className="start" onClick={this.buttonClickHandler}>
                    Start
                </button>
            );
        }
    }

    render() {
        return <div className="playground">{this.renderBallOrButton()}</div>;
    }
}

export default App;