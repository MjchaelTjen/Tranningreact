import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class QuanLySinhVien extends Component {
    render() {
        return (
            <div>
                <FormSinhVien />
                <TableSinhVien />
            </div>
        )
    }
}
