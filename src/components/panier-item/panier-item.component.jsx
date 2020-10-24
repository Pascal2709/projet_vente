import React from "react";
import { connect } from 'react-redux'

import { supprimeItemDuPanier, ajouteItem, diminueItem } from "../../redux/caddie/caddie.action";

import './panier-item.styles.scss'

const PanierItem = ({ caddieItem, supprimeItem, ajouteItem, diminueItem }) => {
    const { nom, imageUrl, prix, quantite } = caddieItem
    return (
    <div className='panier-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='nom'>{nom}</span>
        <span className='quantite'>
            <div className="fleche" onClick={() => diminueItem(caddieItem)}>&#10094;</div>
            <span className="valeur">{quantite}</span>
            <div className="fleche" onClick={() => ajouteItem(caddieItem)}>&#10095;</div>
        </span>
        <span className='prix'>{prix} €</span>
        <span className='supprime-boutton'
            onClick={() => supprimeItem(caddieItem)}>&#10005;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    supprimeItem: item => dispatch(supprimeItemDuPanier(item)),
    ajouteItem: item => dispatch(ajouteItem(item)),
    diminueItem: item => dispatch(diminueItem(item))
})
export default connect(null, mapDispatchToProps)(PanierItem)