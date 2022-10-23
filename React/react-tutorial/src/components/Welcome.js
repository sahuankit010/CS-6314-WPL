import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return (
            <div>

                <h1>Message is {this.props.message} and the code is {this.props.messageCode}</h1>
            </div>
        )
    }
}

export default Welcome