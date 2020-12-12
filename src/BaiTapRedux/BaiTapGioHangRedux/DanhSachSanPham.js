import React, { Component } from 'react'
import SanPham from './SanPham'
import ProductList from "../../DataBinding/Props/Data/ProductList.json"

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        return ProductList.map((sp, index) => {
            return <div className="col-4" key={index}>
                <SanPham SPP={sp} />
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-primary">Danh sách sản phẩm</h1>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
