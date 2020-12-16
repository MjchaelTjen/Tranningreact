import React, { Component } from 'react'

export default class ChildComponentLifeCycle extends Component {

    timeout = setInterval(() => {
        console.log(1);
    }, 100);

    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('child constructor')
    }

    // static getDeriver

    // console.log('child getDerived')


    render() {
        return (
            <div>
                child component
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval(this.timeout);
        console.log(' child componentWillUnmount')
    }
}
