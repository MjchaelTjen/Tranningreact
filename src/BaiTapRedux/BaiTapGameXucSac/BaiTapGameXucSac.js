import React, { Component } from 'react'
import KetQua from '../BaiTapGameXucSac/KetQua'
import XucSac from '../BaiTapGameXucSac/XucSac'
import StyleGame from './BaiTapGameXucSac.module.css'
export default class BaiTapGameXucSac extends Component {
    render() {
        return (
            <div className={`${StyleGame['bg-Game']}`}>
                <h1 className="display-4 text-center">Bài Tập Game Xúc Sắc</h1>
                <XucSac />
                <KetQua />
            </div>
        )
    }
}
