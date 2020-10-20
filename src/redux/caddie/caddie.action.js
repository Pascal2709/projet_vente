import CaddieActionTypes from "./caddie.types";

export const toggleCaddieHidden = () => ({
    type: CaddieActionTypes.TOGGLE_CADDIE_HIDDEN
})

export const ajouteItem = item => ({
    type: CaddieActionTypes.AJOUTE_ITEM,
    payload: item
})