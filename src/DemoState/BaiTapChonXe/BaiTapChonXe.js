import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: "./img/car/products/red-car.jpg" // Giá trị mặc định của state
    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 pt-20">
                        {/*Hình ảnh*/}
                        <img className="w-100" src={this.state.imgSrc}></img>

                    </div>
                    <div className="col-6">
                        {/* Chon màu xe*/}
                        <div className="card">
                            <div className="car-header bg-dark text-white">Exterior Color</div>
                            {/* <img className="card-img-top" src="holder.js/100px180/" alt /> */}
                            <div className="card-body">
                                <div className="row mt-2 border">
                                    <div className="col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeColor("black")
                                        }} src="./img/car/icons/icon-black.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Black color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border">
                                    <div className="col-2">
                                        <img style={{ cursor: "pointer" }} onClick={()=>{
                                            this.changeColor("red")
                                        }} src="./img/car/icons/icon-red.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Red color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border">
                                    <div className="col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => this.changeColor("steel")} src="./img/car/icons/icon-steel.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border">
                                    <div className="col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => this.changeColor("silver")} src="./img/car/icons/icon-silver.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
