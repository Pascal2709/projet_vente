import React from "react";

import './caddie-item.styles.scss'

const CaddieItem = ({ item: { imageUrl, prix, nom, quantite } }) => (
    <div className="caddie-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="nom">{nom}</span>
            <span className="prix">{quantite} x {prix} €</span>
        </div>
    </div>
)

export default CaddieItem