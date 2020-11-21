import React, { Component } from 'react'
import Laptop from './Laptop'
import Smartphone from './Smartphone'

export default class Product extends Component {
    render() {
        return (
            <div>
                <Smartphone></Smartphone>
                <Laptop></Laptop>
            </div>

        )
    }
}
