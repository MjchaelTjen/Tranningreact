import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert("Hello");
    }
    showInfo = (info) => {
        alert("Wellcome")
    }
    render() {
        const title = "cybersoft"

        return (
            <div className="container">
                <h3>Handle event</h3>
                <button onClick={this.showMess}>Click me</button>

                <button onClick={() => {
                    alert(`Hello${title}`);
                }}>Click me</button>

                <button onClick={() => {
                    this.showInfo("helo fe54")
                }}>Showinfo</button>

                {/* Cách sử dụng hàm bind - ít dùng */}
                <button onClick={this.showInfo.bind(this, "helo cyberfe54")}>show info</button>
            </div>
        )
    }
}
