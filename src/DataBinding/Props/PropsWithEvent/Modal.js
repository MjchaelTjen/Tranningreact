import React, { Component } from 'react'

export default class Modal extends Component {

    tinhTongTien = () => {
        let tongTien = this.props.cart.reduce((tt, spc, index) => {
            return tt += spc.soLuong * spc.giaBan;
        }, 0)
        return tongTien.toLocaleString();
    }
    render() {
        return (

            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>Mã SP</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên SP</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cart.map((product, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{product.maSP}</td>
                                                    <td><img src={product.hinhAnh} width="50"></img></td>
                                                    <td>{product.tenSP}</td>
                                                    <td>
                                                        <button onClick={() => {
                                                            // xử lý tăng
                                                            this.props.tgsl(product.maSP, 1);
                                                        }}>+</button>
                                                        {product.soLuong}
                                                        <button onClick={() => {
                                                            // xử lí giảm
                                                            this.props.tgsl(product.maSP, -1);
                                                        }}>-</button>
                                                    </td>
                                                    <td>{product.giaBan}</td>
                                                    <td>{product.soLuong * product.giaBan}</td>
                                                    <td><button className="btn btn-danger" onClick={() => {
                                                        //Nhận sự kiện deleteItem thông qua props tên deleteItem
                                                        this.props.deleteItem(product.maSP)
                                                    }}>Xóa</button></td>
                                                </tr>
                                            )
                                        })}
                                        <tfoot>
                                            <td colSpan='5'></td>
                                            <td>Tổng tiền:</td>
                                            <td>
                                                {this.tinhTongTien()}
                                            </td>
                                        </tfoot>
                                    </tbody>
                                    <tfoot>
                                        <td colSpan='5'></td>
                                        <td>Tổng tiền:</td>
                                        <td>
                                            {this.tinhTongTien()}
                                        </td>
                                    </tfoot>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
