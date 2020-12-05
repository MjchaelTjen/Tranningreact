import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { prod, onViewDetail,addToCart } = this.props;
        return (
              
            <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => onViewDetail(prod)}>Xem Chi Tiết</button>
                        <button className="btn btn-danger ml-2" onClick={() =>{
                        addToCart(prod);
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>

        )
    }
}
