import React, { Component } from 'react'
import productList from '../Data/ProductList.json'
import Modal from './Modal';
import Product from './Product';

export default class ProductList extends Component {

    state = {
        productDetail: productList[0],
        cart: [
            {
                maSP: 1,
                tenSP: "VinSmart Live",
                giaBan: 5700000,
                hinhAnh: "./img/vsphone.jpg",
                soLuong: 2,
            },
        ],
    };

    renderProductListHandle = () => {
        return productList.map((product, index) => {
            return <Product prod={product} onViewDetail={this.vewDetailHandler} key={index} addToCart={this.addToCart} />
        });
    };

    vewDetailHandler = (productsss) => {
        // console.log(productsss);
        this.setState({
            productDetail: productsss,
        });
    };

    addToCart = (product) => {
        const productUdate = { ...product, soLuong: 1, };
        const iindex = this.state.cart.findIndex(product => product.maSP === productUdate.maSP);
        if (iindex !== -1) {
            const newCart = [...this.state.cart];
            newCart[iindex].soLuong += 1;
            this.setState({
                cart: newCart,
            });
            // this.state.cart[iindex].soLuong += 1;
        }
        else {
            const productUdate = { ...product, soLuong: 1 };
            this.setState({
                cart: [...this.state.cart, productUdate]
            });
        }
        // this.setState({
        //     cart: [...this.state.cart, productUdate, ],
        // });
    };

    deleteItem = (maSPClick) => {
        // console.log(maSP)
        // Tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
        let gioHangVuaXoa = [...this.state.cart];
        // Xử lý xóa trên giỏ hàng mới 
        let index = gioHangVuaXoa.findIndex(spgh => spgh.maSP === maSPClick);
        if (index !== -1) {
            gioHangVuaXoa.splice(index, 1);
        }
        // gán lại giỏ hàng cũ bằng giỏ hàng mới
        this.setState({
            cart: gioHangVuaXoa
        });
    }

    // định nghìa hàm thay đổi số lượng tại nơi chứa stats số lượng (số lượng nằm trong cart[])
    tangGiamSoLuong = (maSPGioHangXoaClick,soLuong) => {
        console.log(maSPGioHangXoaClick)
        let gioHangCapNhatSauTangGiam = [...this.state.cart];
        // tìm trong giỏ hàng có sản phẩm mã == với sản phẩm được click + hoặc -
        let sp = gioHangCapNhatSauTangGiam.find(spgh => spgh.maSP === maSPGioHangXoaClick);
        // tìm thấy sản phẩm trong giỏ hàng
        if (sp) {
            sp.soLuong += soLuong;
        }
        // cập nhật lại vào giỏ hàng
        this.setState({
            cart: gioHangCapNhatSauTangGiam
        });

    }

    render() {
        const { productDetail, cart } = this.state;
        return (
            <>
                { /* Modal giỏ hàng */}
                <Modal cart={cart} deleteItem={this.deleteItem} tgsl={this.tangGiamSoLuong} />
                <div className="row">
                    {this.renderProductListHandle()}
                </div>
                { /* thông tin chi tiết*/}
                <div className="row pt-20">
                    <div className="col-6 text-center">
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} width="300"></img>
                    </div>
                    <div className="col-6 ">
                        <h5>Thông số kỹ thuật</h5>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th> Màn hình</th>
                                    <td>{productDetail.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <td>{productDetail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <td>{productDetail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{productDetail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{productDetail.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{productDetail.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>

        )
    }
}
