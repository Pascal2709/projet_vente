import { createSelector } from "reselect";

const selectCaddie = state => state.caddie


export const selectCaddieItems = createSelector(
    [selectCaddie],
    (caddie) => caddie.caddieItems
)

export const selectCaddieCompteElements = createSelector(
    [selectCaddieItems],
    caddieItems => caddieItems.reduce(
        (totalQuantite, caddieItem) => totalQuantite + caddieItem.quantite,
        0)
)