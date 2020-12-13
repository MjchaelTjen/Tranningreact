import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormSinhVien extends Component {
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
        //     console.log('stateSinhVien', this.state);
        // })

        // Xử lí cập nhật value
        const newValues = { ...this.state.values } // lưu giữ lại các giá trị trước người dùng đã nhập
        newValues[name] = value; // Gán giá trị mới chó thuộc tính đang nhập


        // xử lý errors
        const newErrors = { ...this.state.errors }; // giữ lại cá giá trị errors cũ
        // Nếu value của trường đang nhập bị rỗng thi gán lại lỗi đó cho trường đang nhập đó
        newErrors[name] = value.trim() === '' ? name + 'không được bỏ trống !' : '';

        console.log("err", newErrors)
        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (value.trim() === '') {
                newErrors[name] = name + 'không được bỏ trống !';
            }
            else if (!regexEmail.test(value)) {
                newErrors[name] = name + 'không đúng định dạng!'
            }
        }

        if (typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if (value.trim() === '') {
                newErrors[name] = name + 'không được bỏ trống !';

            }
            else if (!regexNumber.test(value)) {
                newErrors[name] = name + 'không đúng định dạng!'
            }
        }

        // setState lại
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Chặn sự kiện submit của browser khi người dùng submit = reactform
        // Kiểm tra dữ liệu người dùng hợp lệ => submit
        let valid = true;
        // Kiểm tra tất cả thuộc tính trong this.state.values
        // for (let key in this.state.values) {
        //     if (this.state.values[key].trim() === '') {
        //         valid = false;
        //     }
        // }
        // kiểm tra tất cả các thuộc tính của this.state.errors
        // for (let key in this.state.errors) {
        //     if (this.state.errors[key] !== '') {
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
            sinhVien: this.state.values
        })


    }

    componentWillReceiveProps(newProps) {
        // Props từ redux gán vào state của component
        this.setState({
            values: newProps.svUdate
        });


        // sau đó binding giá trị này lên giao diện tư state
    }

    render() {
        let { maSV, tenSV, email, soDT } = this.state.values;

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
                                <p className='text text-danger'>{this.state.errors.maSV}</p>

                            </div>
                            <div className="form-group">
                                <h4> Tên sinh viên</h4>
                                <input className="form-control" name='tenSV'
                                    onChange={
                                        this.handleChangeInput
                                    } value={tenSV} />
                                <p className='text text-danger'>{this.state.errors.tenSV}</p>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h4> Email</h4>
                                <input typeInput='email' className="form-control" name='email'
                                    onChange={
                                        this.handleChangeInput
                                    } value={email} />
                                <p className='text text-danger'>{this.state.errors.email}</p>

                            </div>
                            <div className="form-group">
                                <h4> So Điện Thoai</h4>
                                <input typeInput='phone' className="form-control" name='soDT'
                                    onChange={
                                        this.handleChangeInput
                                    } value={soDT} />
                                <p className='text text-danger'>{this.state.errors.soDT}</p>

                            </div>
                        </div>
                        <button className='btn btn-success mr-5' type='submit'>Thêm sinh viên</button>
                        <button className='btn btn-success' type='button' onClick={() => {

                        }}>Update</button>
                    </div>
                </div>
            </form>

        )

    }
}


const mapStateToProps = (state) => ({
    svUdate: state.QuanLySinhVienRdeucer.svUpdated
})

export default connect(mapStateToProps)(FormSinhVien);