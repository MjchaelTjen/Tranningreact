import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import Laptop from './Laptop'
import Productlist from './Productlist'
import Promotion from './Promotion'
import Smartphone from './Smartphone'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <Productlist></Productlist>
                {/* <Smartphone></Smartphone> */}
                {/* <Laptop></Laptop> */}
                <Promotion></Promotion>
            </div>
        )
    }
}
