const stateGioHang = {
    gioHang: [
        // {
        //     maSP: 1,
        //     tenSP: "IphoneX",
        //     hinhAnh: "./img/sp_iphoneX.png",
        //     donGia: 1000,
        //     soLuong: 5
        // }
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // xử lý cập nhật satte.gioHang
            let gioHangCapNhat = [...state.gioHang]
            // Tìm  tròn giỏ hàng có sản phẩm nào có mã == spClick hay không ?
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick.maSP);
            if (spGioHang) {
                // Tìm thấy tăng số lượng
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(action.sanPhamClick)
            }
            // Cập nhật lại state
            state.gioHang = gioHangCapNhat;
            console.log(state);
            // immutable tính bất biến của redux: Giá trị state mới trả về phải khách state cũ
            return { ...state };
        }
        case 'XOA_GIO_HANG': {
            // const gioHangCapNhat = [...state.gioHang]
            console.log(action, 'ACTION REDUCER')
            let gioHangCapNhat = [...state.gioHang]
            //Tìm trong giỏ hàng có sản phẩm đó không ?
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPXoa);
            // if (index !== -1) {
            //     gioHangCapNhat.splice(index, 1);
            // }
            // Cập nhật lại state giỏ hàng
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'TANG_GIAM_SO_LUONG': {
            const gioHangCapNhat = [...state.gioHang]
            // Tìm sản phaarma được click trong giỏ hàng
            let SPGH = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick);
            if (SPGH) {
                if (action.soLuong == -1 && SPGH.soLuong <= 1) {
                    return { ...state }
                }
                SPGH.soLuong += action.soLuong;
            }
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
    }
    return state;
}