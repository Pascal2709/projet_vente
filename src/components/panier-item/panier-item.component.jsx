import React from "react";

import './panier-item.styles.scss'

const PanierItem = ({ caddieItem: {nom, imageUrl, prix, quantite} } ) => (
    <div className='panier-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='nom'>{nom}</span>
        <span className='quantite'>{quantite}</span>
        <span className='prix'>{prix} €</span>
        <span className='supprime-boutton'>&#10005;</span>
    </div>
)

export default PanierItem