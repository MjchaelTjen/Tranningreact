import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucSac extends Component {
    renderXucSac = () => {
        return this.props.arrXucSac.map((xucsac, index) => {
            return <img key={index} src={xucsac.hinhAnh} width="50" height="50"></img>
        })
    }
    render() {
        console.log(this.props.arrXucSac)
        return (
            <div className="container-fliud">
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-danger"><span className="display-4">Tài</span></button>
                    </div>
                    <div className="col-4">
                        {this.renderXucSac()}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger"><span className="display-4">Xỉu</span></button>
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