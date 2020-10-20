import React from "react";
import { connect } from 'react-redux'

import BoutonCustom from "../bouton_custom/bouton-custom.component";
import { ajouteItem } from "../../redux/caddie/caddie.action"

import './collection-item.styles.scss'

const CollectionItem = ({ item, ajouteItem}) => {
    const {nom, prix, imageUrl } = item

    return (
    <div className="collection-item">
        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="nom">{nom}</span>
            <span className="prix">{prix}</span>
        </div>
        <BoutonCustom inverse onClick={ () => ajouteItem(item) }>Ajoute au Caddie</BoutonCustom>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    ajouteItem: item => dispatch(ajouteItem(item))
})


export default connect (null, mapDispatchToProps) (CollectionItem)