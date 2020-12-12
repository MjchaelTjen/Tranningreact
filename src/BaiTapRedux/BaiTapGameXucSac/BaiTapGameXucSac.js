import React, { Component } from 'react'
import KetQuaComponent from './KetQuaComponent'
import XucSacComponent from './XucSacComponent'
import StyleGame from './BaiTapGameXucSac.module.css'
import { connect } from 'react-redux'
class BaiTapGameXucSac extends Component {
    render() {
        return (
            <div className={`${StyleGame['bg-Game']}`}>
                <h1 className="display-4 text-center text-warning" >Bài Tập Game Xúc Sắc</h1>
                <XucSacComponent />
                <KetQuaComponent></KetQuaComponent>
            </div>
        )
    }
}

export default connect()(BaiTapGameXucSac)