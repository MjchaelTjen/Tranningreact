import React, { Component } from 'react';
import { connect } from 'react-redux'

class SanPham extends Component {
    render() {
        console.log("props SPP", this.props)
        let { SPP } = this.props;

        return (
            <div className="card ">
                <img height="300" className="card-img-top" src={SPP.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{SPP.tenSP}</h4>
                    <p className="card-text">{SPP.donGia}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={() => {
                        this.props.themGioHang(SPP);
                    }} >Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    // dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClick) => {
            // Gửi dữ liệu lên redux
            // bước 1: Tạo action
            const action = {
                type: 'THEM_GIO_HANG', // type thuộc tính bắt buộc
                sanPhamClick: { ...spClick, soLuong: 1 } // Thuộc tính thứ 2 là giá trị gửi len redux
            }

            // Bước 2: Sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch(action);
            // console.log(spClick);
        }
    }
}

// Kết nối component SanPham với store
// Tham số thứ 1 của connect: là mapDispatchToProps (nếu không lấy dữ liệu từ store nào về thì để null)
// Tham số thứ 2 của connect:  là mapDispatchToProps hàm này sẽ tạo ra props là function đưa dữ liệu lên store
export default connect(null, mapDispatchToProps)(SanPham)