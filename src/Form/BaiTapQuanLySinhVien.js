import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import FormSInhVienRedux from './FormSInhVienRedux'
import TableSinhVien from './TableSinhVien'

export default class QuanLySinhVien extends Component {
    render() {
        return (
            <div className='container text-center'>
                <FormSinhVien />
                {/* <FormSInhVienRedux /> */}
                <TableSinhVien />
            </div>
        )
    }
}
