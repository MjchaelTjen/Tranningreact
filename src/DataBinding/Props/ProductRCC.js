import React, { Component } from 'react'

export default class ProductRCC extends Component {

    // this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    // this.props thuộc tính không được gán lại giá trị

    render() {
        // this.props.sanPham = {};
        // let {tenSpham} = this.props;
        // let {hinhAnh} = this.props;
        let {sanPham} = this.props;
        // let {maSP,tenSp,giaBan,hinhAng} = this.props.sanPham;
        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt="123.jpg" />
                <div className="card-body">
                    <h4 className="card-title text-dark">{sanPham.tenSP}</h4>
                    <p className="card-text">{this.props.sanPham.giaBan}</p>
                    <p className="card-text">
                        {this.props.sanPham.heDieuHanh}
                    </p>
                </div>
            </div>

        )
    }
}
