import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import PanierItem from "../../components/panier-item/panier-item.component";

import { selectCaddieItems, selectCaddieTotal } from "../../redux/caddie/caddie.selectors";
import StripeCheckoutBouton from "../../components/stripe-bouton/stripe-bouton.component";

import './panier.styles.scss'

const PanierPage = ({caddieItems, total}) => (
    <div className="page-panier">
        <div className="panier-header">
            <div className="header-block">
                <span>Produit</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantité</span>
            </div>
            <div className="header-block">
                <span>Prix</span>
            </div>
            <div className="header-block">
                <span>Supprimer</span>
            </div>
        </div>
        {
            caddieItems.map(caddieItem =>
                <PanierItem key={caddieItem.id} caddieItem={caddieItem} />
            )
        }
        <div className='total'>
            <span>{total} €</span>
        </div>
        <div className="test-message">
            *SVP Utiliser la carte suivante pour vos test
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeCheckoutBouton prix={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    caddieItems: selectCaddieItems,
    total: selectCaddieTotal
})

export default connect ( mapStateToProps ) (PanierPage)