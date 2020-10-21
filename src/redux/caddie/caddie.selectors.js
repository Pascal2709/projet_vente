import { createSelector } from "reselect";

const selectCaddie = state => state.caddie


export const selectCaddieItems = createSelector(
    [selectCaddie],
    (caddie) => caddie.caddieItems
)

export const selectCaddieHidden = createSelector(
    [selectCaddie],
    caddie => caddie.hidden
)

export const selectCaddieCompteElements = createSelector(
    [selectCaddieItems],
    caddieItems => caddieItems.reduce(
        (totalQuantite, caddieItem) => totalQuantite + caddieItem.quantite,
        0)
)

export const selectCaddieTotal = createSelector(
    [selectCaddieItems],
    caddieItems => caddieItems.reduce(
        (totalPrix, caddieItem) => totalPrix + caddieItem.quantite * caddieItem.prix,
        0)
)