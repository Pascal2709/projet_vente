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

export const diminuerQuantite = (caddieItems, itemAReduire) => {
    const elementExist = caddieItems.find(
        caddieItem => caddieItem.id === itemAReduire.id
    )
    if (elementExist.quantite === 1) {
        return caddieItems.filter(caddieItem => caddieItem.id !== itemAReduire.id )
    }
    return caddieItems.map(caddieItem =>
    caddieItem.id === itemAReduire.id
        ? { ...caddieItem, quantite: caddieItem.quantite - 1 }
        : caddieItem
    )
}