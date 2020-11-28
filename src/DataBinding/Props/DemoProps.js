import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-danger text-center">Danh Sach San Pham</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="10$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Samsung" price="20$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Nokia" price="30$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi"
                        price="40$"/>
                    </div>
                </div>
            </div>
        )
    }
}
