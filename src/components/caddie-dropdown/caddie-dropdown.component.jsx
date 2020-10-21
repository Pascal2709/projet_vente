import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'

import BoutonCustom from "../bouton_custom/bouton-custom.component";
import CaddieItem from "../caddie-item/caddie-item.component";
import { selectCaddieItems } from "../../redux/caddie/caddie.selectors";
import { toggleCaddieHidden } from "../../redux/caddie/caddie.action";


import './caddie-dropdown.styles.scss'

const CaddieDropdown = ({ caddieItems, history, dispatch }) => (
    <div className="caddie-dropdown">
        <div className="caddie-items">
            {
                caddieItems.length ? (
                caddieItems.map(caddieItem => <CaddieItem key={caddieItem.id} item={caddieItem}/> )
                ) : (
                    <span className='message-vide'>Le panier est vide</span>
                )
            }
        </div>
        <BoutonCustom onClick={() => {
            history.push('/panier');
            dispatch(toggleCaddieHidden())
        }}>PANIER</BoutonCustom>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    caddieItems: selectCaddieItems
})

export default withRouter( connect( mapStateToProps )(CaddieDropdown) )