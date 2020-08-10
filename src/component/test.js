import React, { Component } from 'react'

class test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'hy'
        }
    }
    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }
    clickHandlertwo = () => {
        this.setState({
            message: 'hy'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>click</button>
                <button onClick={this.clickHandlertwo}>click to return</button>
            </div>
        )
    }
}

export default test;
