



const stateDefault = {
    arrSinhVien: [
        { maSV: 1, tenSV: 'vu van tien', email: 'vantien@gmail.com', soDT: '0936348179' },
        { maSV: 2, tenSV: 'vu van tuan', email: 'vantuan@gmail.com', soDT: '0932348179' }

    ],
    svUpdated: {
    },
    sinhVienRedux: {
        values: {
            maSV: '',
            tenSV: '',
            email: '',
            soDT: ''
        },
        errors: {
            maSV: '',
            tenSV: '',
            email: '',
            soDT: ''
        }
    }


}


export const QuanLySinhVienRdeucer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            // const arrSinhVienUdate = [...state.arrSinhVien];
            const arrSinhVienUdate = [...state.arrSinhVien, action.sinhVien]; // sao chép mảng sinh viên ra và thêm vào 1 sinh viên mới


            // arrSinhVienUpdate.push(action.sinhVien)

            // state.arrSinhVien =  arrSinhVienUpdate
            return { ...state, arrSinhVien: arrSinhVienUdate }
        }

        case 'SUA_SINH_VIEN': {
            state.svUpdated = { ...action.svedit1111 };

            // cập nhật lại state của formredux
            let newSinhVienRedux = { ...state.sinhVienRedux };

            newSinhVienRedux.values = { ...action.svedit1111 };

            return { ...state, sinhVienRedux: newSinhVienRedux }
        }

        case 'SET_SV_REDUX': {
            state.sinhVienRedux = action.sinhVienRedux;
            return { ...state }
        }

        case 'CAP_NHAT_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.arrSinhVien];

            let svUpdate = mangSinhVienCapNhat.find(sv => sv.maSV === state.sinhVienRedux.values.maSV);
            if (svUpdate) {
                svUpdate.tenSV = state.sinhVienRedux.values.tenSV;
                svUpdate.maSV = state.sinhVienRedux.values.maSV;
                svUpdate.email = state.sinhVienRedux.values.email;
                svUpdate.soDT = state.sinhVienRedux.values.soDT;

            }
            state.arrSinhVien = mangSinhVienCapNhat;
            return { ...state };
        }

    }
    return { ...state }
}