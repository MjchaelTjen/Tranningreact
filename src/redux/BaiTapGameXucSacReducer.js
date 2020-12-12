const stateDefault = {
    datCuoc: true, // True: tài , false: xỉu
    soBanThang: 0,
    soBanChoi: 0,
    Computer:0,
    arrXucSac: [
        { hinhAnh: './imgame/6.png', diem: 6 },
        { hinhAnh: './imgame/6.png', diem: 6 },
        { hinhAnh: './imgame/6.png', diem: 6 }
    ]
};

export const BaiTapGameXucSacReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC': {
            state.datCuoc = action.datCuoc
            return { ...state }
        }
        case 'RAN_DOM_XUC_SAC': {
            console.log("random-Game", action)
            // Random
            // Tạo 1 mảng xúc sắc ngẫu nhiên
            const mangXXNN = [];
            // xử lí random 3 lần tạo ra 3 xúc xắc
            for (let i = 0; i < 3; i++) {
                // tạo ra 1 số ngầu nhiền từ 1=>6=
                const soNN = Math.floor(Math.random() * 6) + 1;
                // từ số ngẫu nhiên tạo ra object xúc xắc
                const xxNN = { hinhAnh: `./imgame/${soNN}.png`, diem: soNN }
                // thêm xx ngẫu nhiên vào mangXXNN
                mangXXNN.push(xxNN)
            }
            // Gán lại state ( arrXuxSac = mangXXNN )
            state.arrXucSac = mangXXNN;

            // Cập nhật state.soBanThang 
            const tongDiem = state.arrXucSac.reduce((td, xuXac, index) => {
                return td += xuXac.diem
            }, 0);
            if ((state.datCuoc && tongDiem > 10) || (!state.datCuoc && tongDiem <= 10)) {
                state.soBanThang += 1;
            }
            // Cập nhật state.soLanChoi 
            state.soBanChoi += 1;
            return { ...state }
        }
    }
    return state;
}