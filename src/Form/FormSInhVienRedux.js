import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormSinhVienRedux extends Component {
    state = {
        values: {
            maSV: '',
            tenSV: '',
            email: '',
            soDT: ''
        },
        errors: {
            maSV: '',
            tenSV: '',
            email: '',
            soDT: ''
        }
    }

    handleChangeInput = (event) => {
        // event đại diện cho sự kiện xảy ra trên thẻ
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput') // attribute là thuộc tính người dùng tự thêm trên thẻ
        console.log(typeInput);
        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log('stateSinhVien', this.props.sinhVienRedux);
        // })

        // Xử lí cập nhật value
        const newValues = { ...this.props.sinhVienRedux.values } // lưu giữ lại các giá trị trước người dùng đã nhập
        newValues[name] = value; // Gán giá trị mới chó thuộc tính đang nhập


        // xử lý errors
        const newErrors = { ...this.props.sinhVienRedux.errors }; // giữ lại cá giá trị errors cũ
        // Nếu value của trường đang nhập bị rỗng thi gán lại lỗi đó cho trường đang nhập đó
        newErrors[name] = value.trim() === '' ? name + 'không được bỏ trống !' : '';

        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + 'không đúng định dạng!'
            }
        }

        if (typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = name + 'không đúng định dạng!'
            }
        }

        // setState lại
        // this.setState({
        //     values: newValues,
        //     errors: newErrors
        // }, () => {
        //     console.log(this.props.sinhVienRedux)
        // })
        this.props.dispatch({
            type: "SET_SV_REDUX",
            sinhVienRedux: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của browser khi người dùng submit = reactform
        // Kiểm tra dữ liệu người dùng hợp lệ => submit
        let valid = true;
        // Kiểm tra tất cả thuộc tính trong this.props.sinhVienRedux.values
        // for (let key in this.props.sinhVienRedux.values) {
        //     if (this.props.sinhVienRedux.values[key].trim() === '') {
        //         valid = false;
        //     }
        // }
        // kiểm tra tất cả các thuộc tính của this.props.sinhVienRedux.errors
        // for (let key in this.props.sinhVienRedux.errors) {
        //     if (this.props.sinhVienRedux.errors[key] !== '') {
        //         valid = false;
        //     }
        // }
        // if (!valid) {
        //     alert('Dữ liệu không hợp lệ !');
        //     return;
        // }
        // xử lí submit => api hoặc redux (dispatch).....
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVienRedux.values
        })


    }



    render() {
        let { maSV, tenSV, email, soDT } = this.props.sinhVienRedux.values;

        return (
            <form className="card text-left" onSubmit={this.handleSubmit}>
                <h3 className="card-jeader bg-dark text-white" alt>Thong tin sinh vien</h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <h4> Mã Sinh Viên</h4>
                                <input className="form-control" name='maSV'
                                    onChange={
                                        this.handleChangeInput
                                    } value={maSV} />
                                <p className='text text-danger'>{this.props.sinhVienRedux.errors.maSV}</p>

                            </div>
                            <div className="form-group">
                                <h4> Tên sinh viên</h4>
                                <input className="form-control" name='tenSV'
                                    onChange={
                                        this.handleChangeInput
                                    } value={tenSV} />
                                <p className='text text-danger'>{this.props.sinhVienRedux.errors.tenSV}</p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h4> Email</h4>
                                <input typeInput='email' className="form-control" name='email'
                                    onChange={
                                        this.handleChangeInput
                                    } value={email} />
                                <p className='text text-danger'>{this.props.sinhVienRedux.errors.email}</p>

                            </div>
                            <div className="form-group">
                                <h4> So Điện Thoai</h4>
                                <input typeInput='phone' className="form-control" name='soDT'
                                    onChange={
                                        this.handleChangeInput
                                    } value={soDT} />
                                <p className='text text-danger'>{this.props.sinhVienRedux.errors.soDT}</p>

                            </div>
                        </div>
                        <button className='btn btn-success' type='submit'>Thêm sinh viên</button>
                        <button className='btn btn-success' type='button'/* thuộc tính type='button' này sẽ ko gọi lại submit để ko thêm phần tử nữa */ onClick={() => {
                            this.props.dispatch({
                                type: 'CAP_NHAT_SINH_VIEN'
                            })
                        }}>Update</button>
                    </div>
                </div>
            </form>

        )

    }
}


const mapStateToProps = (state) => ({
    sinhVienRedux: state.QuanLySinhVienRdeucer.sinhVienRedux
})

export default connect(mapStateToProps)(FormSinhVienRedux);