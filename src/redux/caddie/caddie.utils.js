export const ajouteItemAuCaddie = (caddieItems, elementaAjouter) => {
    const elementExist = caddieItems.find(
        caddieItem => caddieItem.id === elementaAjouter.id
    )
    if (elementExist) {
        return caddieItems.map(caddieItem =>
            caddieItem.id === elementaAjouter.id
            ? { ...caddieItem, quantite: caddieItem.quantite + 1 }
            : caddieItem
        )
    }

    return [...caddieItems, { ...elementaAjouter, quantite: 1}]
}