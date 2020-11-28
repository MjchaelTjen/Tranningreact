import React, { Component } from 'react'

export default class DataBIndingClassComponent extends Component {
    sinVien = {
        ma: "001",
        ten: "Vu Van Tien",
        hinhAnh: "https://picsum.photos/200"
    }

    renderPicture = () => {
        return <img src={this.sinVien.hinhAnh} width="200" height="200" alt="123.jpg"></img>
    }
    render() {
        const title = "title"

        const renderTitle = () => {
            return <div> {title} </div>
        }

        return (
            <div className="container">
                <h3>Binding class</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}

                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên: {this.sinVien.ma}</li>
                    <li>Tên sinh viên: {this.sinVien.ten}</li>
                    <li><img src={this.sinVien.hinhAnh} width="200" height="200" alt="123.jpg"></img></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
