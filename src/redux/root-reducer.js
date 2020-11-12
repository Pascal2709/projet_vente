import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import caddieReducer from "./caddie/caddie.reducer";
import categorieReducer from "./categorie/categorie.reducer";
import shoppingReducer from "./shopping/shopping-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'caddie'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    caddie: caddieReducer,
    categorie: categorieReducer,
    shopping: shoppingReducer
})

export default persistReducer(persistConfig, rootReducer)