import React from "react";

class StatefulGreetingWithPrevState extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }
    // USE SET STATE AND PREVSTATE AS WELL AS THE CALLBACK 
    // WHEN UPDATING STATES IN REACT
    handleClick() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            introduction:
              prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
          };
        });
    }

    // USE SET STATE AND PREVSTATE AS WELL AS THE CALLBACK 
    // WHEN UPDATING STATES IN REACT
    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, ()=>{
    //         // Callback section that runs after setState
    //         console.log('new state', this.state.introduction);
    //         console.log('new state', this.state.buttonText);
    //     });
    //     // This section runs before setState
    //     console.log(this.state.introduction);
    //     console.log(this.state.buttonText);
    // }

    increment() {
        this.setState((prevState, prevProps) => {
          console.log("Previous State:", prevState);
          console.log("Previous Props:", prevProps);
          return {
            count: prevState.count + 1,
          };
        });
    }

    render() {
        return (
          <div>
            <h1>
              {this.state.introduction} {this.props.greeting}
            </h1>
            <button onClick={() => this.handleClick()}>
              {this.state.buttonText}
            </button>
            <button onClick={() => this.increment()}>Increment</button>
            <p>You've clicked {this.state.count} times</p>
          </div>
        );
    }
}

export default StatefulGreetingWithPrevState;