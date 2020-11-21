import React from 'react'

export default function DataBinDing() {
    //Binding biến (đối tượng, các biến cơ bản)
    const title = "CyberSoft";
    const imgSrc = "https://picsum.photos/200/200";
    const sinhVien = {
        maSV: "SV01",
        tenSinhVien: "Vũ Văn Tiến",
        hinhAnh: "https://picsum.photos/200"
    }

    // Binding hàm
    const renderImg = () => {
        // Giá trị phải trả về 1 chuối, số , jsx (1 đoạn code  html được bao phủ bởi 1 thẻ)
        return <div>
            <h3>Hình ảnh</h3>
            <img src={sinhVien.hinhAnh} width="200" height="200"></img>
        </div>
    }
    return (
        <div>
            <h3>DataBinDing</h3>
            <p id="title" className="display-4">Tiêu đề: {title}</p>
            <img src={imgSrc} width="200" height="200" alt="123.jpg" />
            <input className="form-control w-25 mt-3" value={title}></input>

            <div class="card" style={{ width: 200, height: 200 }}>
                <img class="card-img-top" src={sinhVien.hinhAnh} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title">{sinhVien.tenSinhVien}</h4>
                    <p class="card-text">Mã sinh viên: {sinhVien.maSV}</p>
                </div>
            </div>
            <div className="mt-100"></div>
            {renderImg()}
        </div>
    )
}

