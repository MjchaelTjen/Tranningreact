import React, { Component } from 'react'
// Import 
import { connect } from "react-redux"

class GioHang extends Component {
    render() {
        console.log("gioHang", this.props.gioHang)
        let {gioHang} = this.props;
        return (
            <div>
                <h1 className="text-center text-danger mb-10">Giỏ Hàng</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình ảnh</th>
                            <th>Số Lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành Tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioHang.map((spgh, index) => {
                            return <tr key={index}>
                                <td>{spgh.maSP}</td>
                                <td>{spgh.tenSP}</td>
                                <td><img src={spgh.hinhAnh} width="50" height="50"></img></td>
                                <td>{spgh.soLuong}</td>
                                <td>{spgh.giaBan}</td>
                                <td>{spgh.giaBan * spgh.soLuong}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


// Định nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state) => { // state đại diện cho rootReducer
    return {
        gioHang: state.StateGioHang.gioHang
    }
}

// Kết nối react component với redux với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps,null)(GioHang);
