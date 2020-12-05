import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let { SPP } = this.props;

        return (
            <div className="card ">
                <img height="200" className="card-img-top" src={SPP.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{SPP.tenSP}</h4>
                    <p className="card-text">{SPP.giaBan.toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
