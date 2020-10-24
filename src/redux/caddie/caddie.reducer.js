import CaddieActionTypes from "./caddie.types";
import { ajouteItemAuCaddie, diminuerQuantite } from "./caddie.utils";

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
        case CaddieActionTypes.DIMINUE_ITEM:
            return {
                ...state,
                caddieItems: diminuerQuantite(state.caddieItems, action.payload)
            }
        case CaddieActionTypes.SUPPRIME_ITEM_DU_PANIER:
            return {
                ...state,
                caddieItems: state.caddieItems.filter(
                    caddieItem => caddieItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}

export default caddieReducer