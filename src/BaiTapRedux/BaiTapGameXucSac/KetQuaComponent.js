import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {

        let { datCuoc, soBanThang, soBanChoi } = this.props;

        return (
            <div className="contaier text-center mt-30">

                <div className='mt-30'>
                    <h1 className="display-4">Bạn chọn: <span className="display-4 text-success">{this.props.datCuoc ? 'TÀI' : 'XỈU'}</span></h1>
                </div>
                <div className='mt-30'>
                    <h1 className="display-4">Số lần thắng: <span className="display-4 text-success">{this.props.soBanThang}</span></h1>
                </div>
                <div>
                    <h1 className="display-4">Số bàn chơi: <span className="display-4 text-warning">{this.props.soBanChoi}</span></h1>
                </div>
                <button className='btn btn-success text-center' onClick={() => {

                    this.props.dispatch({
                        type: 'RAN_DOM_XUC_SAC'
                    })

                }}>Play game</button>
            </div>
        )
    }
}

// Hàm lấy giá trị state từ redux về biến thành props cua component
const mapStateToProps = (state) => {
    return {
        datCuoc: state.StateGameXucSac.datCuoc,
        soBanThang: state.StateGameXucSac.soBanThang,
        soBanChoi: state.StateGameXucSac.soBanChoi,
        Computer: state.StateGameXucSac.Computer
    }
}

export default connect(mapStateToProps)(KetQua)