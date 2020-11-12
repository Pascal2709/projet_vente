const INITIAL_STATE = {
    sections : [
        {
            titre: 'chapeaux',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shopping/chapeaux'
        },
        {
            titre: 'vestes',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shopping/vestes'
        },
        {
            titre: 'baskets',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shopping/baskets'
        },
        {
            titre: 'femmes',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            taille: 'large',
            id: 4,
            linkUrl: 'shopping/femmes'
        },
        {
            titre: 'hommes',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            taille: 'large',
            id: 5,
            linkUrl: 'shopping/hommes'
        }
    ]
}

const categorieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default categorieReducer