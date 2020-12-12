import React, { Component } from 'react'
import ProductList from './ProductList'

class PropsWithEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    <button data-toggle="modal" data-target="#modelId">Giỏ hàng (0)</button>
                </div>
                <h3 className="text-center text mb-20">Danh sách sản phẩm</h3>
                <ProductList />
            </div>
        )
    }
}
export default PropsWithEvent;