import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import caddieReducer from "./caddie/caddie.reducer";

export default combineReducers({
    user: userReducer,
    caddie: caddieReducer
})