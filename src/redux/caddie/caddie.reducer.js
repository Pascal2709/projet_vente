import CaddieActionTypes from "./caddie.types";
import { ajouteItemAuCaddie } from "./caddie.utils";

const INITIAL_STATE = {
    hidden: true,
    caddieItems: []
}

const caddieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CaddieActionTypes.TOGGLE_CADDIE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CaddieActionTypes.AJOUTE_ITEM:
            return {
                ...state,
                caddieItems: ajouteItemAuCaddie(state.caddieItems, action.payload)
            }
        default:
            return state
    }
}

export default caddieReducer