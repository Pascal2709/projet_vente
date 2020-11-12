import { createSelector } from "reselect";

const selectCategorie = state => state.categorie

export const selectCategorieSections =createSelector(
    [selectCategorie],
    categorie => categorie.sections
)