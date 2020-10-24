import CaddieActionTypes from "./caddie.types";

export const toggleCaddieHidden = () => ({
    type: CaddieActionTypes.TOGGLE_CADDIE_HIDDEN
})

export const ajouteItem = item => ({
    type: CaddieActionTypes.AJOUTE_ITEM,
    payload: item
})

export const diminueItem = item => ({
    type: CaddieActionTypes.DIMINUE_ITEM,
    payload: item
})

export const supprimeItemDuPanier = item => ({
    type: CaddieActionTypes.SUPPRIME_ITEM_DU_PANIER,
    payload : item
})