const stateGioHang = {
    gioHang: [
        {
            maSP: 1,
            tenSP: "IphoneX",
            hinhAnh: "./img/sp_iphoneX.png",
            donGia: 1000,
            soLuong: 5
        }
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    return {...state}
}