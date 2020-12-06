import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {

        let { datCuoc, soBanThang, soBanChoi } = this.props;

        return (
            <div className="contaier text-center">
                <h1 className="display-4">Bạn chọn: <span className="display-4 text-success">{this.props.datCuoc ? 'TÀI' : 'XỈU'}</span></h1>
                <h1 className="display-4">Số lần thắng: <span className="display-4 text-success">{this.props.soBanThang}</span></h1>
                <h1 className="display-4">Số bàn chơi: <span className="display-4 text-success">{this.props.soBanChoi}</span></h1>
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
    }
}

export default connect(mapStateToProps)(KetQua)