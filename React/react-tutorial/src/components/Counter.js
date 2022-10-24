import {Component} from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement() {
        if (this.state.counter <= 0) {
            alert("Counter should be greater than zero")
            return;
        }
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>Increase Click</button>
                <br/>
                <br/>
                <button onClick={() => this.decrement()}>Decrease Click</button>
                <h3>Counter is: {this.state.counter} </h3>

            </div>
        );
    }
}

export default Counter;