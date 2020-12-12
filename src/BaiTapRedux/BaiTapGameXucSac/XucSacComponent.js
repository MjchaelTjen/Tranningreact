import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucSac extends Component {
    renderXucSac = () => {
        return this.props.arrXucSac.map((xucsac, index) => {
            return <img key={index} src={xucsac.hinhAnh} width="50" height="50"></img>
        })
    }
    hienThiDiem = () => {
        const tongDiem = this.props.arrXucSac.reduce((td, xx, index) => {
            return td += xx.diem;
        }, 0);
        return tongDiem > 10 ? `${tongDiem} - Tài` : `${tongDiem}- Xỉu`;
    }
    render() {
        console.log(this.props.arrXucSac)
        return (
            <div className="container-fliud">
                <div className="row text-center">
                    <div className='col-12'>
                        <h1 className='display-4 text-danger'>{this.hienThiDiem()}</h1>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger" onClick={() => {
                            // props này được sinh ra khi ta dùng hàm connect kêt nối với component
                            this.props.dispatch(
                                {
                                    type: 'DAT_CUOC',
                                    datCuoc: true
                                }
                            )

                        }}><span className="display-4" >Tài</span></button>
                    </div>
                    <div className="col-4">
                        {this.renderXucSac()}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger"><span className="display-4" onClick={() => {
                            // props này được sinh ra khi ta dùng hàm connect kêt nối với component
                            this.props.dispatch(
                                {
                                    type: 'DAT_CUOC',
                                    datCuoc: false
                                }
                            )

                        }}>Xỉu</span></button>
                    </div>
                </div>
            </div>
        )
    }
}


// tạo hàm mapStateToPrpos lấy giá trị từ store về
const mapStateToPrpos = (state) => {

    return {
        arrXucSac: state.StateGameXucSac.arrXucSac
    }

}

export default connect(mapStateToPrpos)(XucSac)