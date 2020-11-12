import { createSelector } from "reselect";

const selectShopping = state => state.shopping

export const selectCollections = createSelector(
    [selectShopping],
    shopping => shopping.collections
)

export const selectCollection = collectionUrlParam =>
    createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)

export const selectCollectionsPourEnsemble = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map( key => collections[key] )
)