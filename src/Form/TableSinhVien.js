import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableSinhVien extends Component {

    renderSinhVien = () => {
        return this.props.arrSinhVien.map((sv, index) => {
            return <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.tenSV}</td>
                <td>{sv.email}</td>
                <td>{sv.soDT}</td>
                <td><button className='btn btn-danger' >Xóa</button></td>
                <td><button className='btn btn-success' onClick={() => {
                    this.props.dispatch({
                        type: 'SUA_SINH_VIEN',
                        svedit1111: sv
                    })
                }}>Sửa</button></td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Ma Sinh Vien</th>
                            <th>Ten Sinh Vien</th>
                            <th>email</th>
                            <th>So Dien Thoai</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//                     () => { return{} } <=> () => ({})
//          ví dụ () => { return <div> </div>} <=> () => (<div></div>)

const mapStateToProps = (state) => ({
    arrSinhVien: state.QuanLySinhVienRdeucer.arrSinhVien
})
// const mapStateToProps = state => {
//     return {
//         arrSinhVien: state.QuanLySinhVienRdeucer.arrSinhVien
//     }
// }

export default connect(mapStateToProps, null)(TableSinhVien)