// File quản lsy tất cả state của ứng dụng (Thay vì đặt tại component  ta đặt state tại Store)
import { combineReducers, createStore } from "redux"


// import 
import {GioHangReducer} from "./GioHangReducer"
const rootReducer = combineReducers({
    // các state sau này khai báo tại đây
    // stateGioHang: (state = stateGioHang, action) => {
    //     return state;
    // }
    // khai báo cá state của ứng dụng
    StateGioHang: GioHangReducer
})

// Tạo ra store chứa rootReducer (xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);

