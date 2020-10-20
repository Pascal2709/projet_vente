import React from "react";
import { connect } from 'react-redux'

import BoutonCustom from "../bouton_custom/bouton-custom.component";
import CaddieItem from "../caddie-item/caddie-item.component";


import './caddie-dropdown.styles.scss'

const CaddieDropdown = ({ caddieItems }) => (
    <div className="caddie-dropdown">
        <div className="caddie-items">
            {
                caddieItems.map(caddieItem => <CaddieItem key={caddieItem.id} item={caddieItem}/> )
            }
        </div>
        
        <BoutonCustom>CHEKOUT</BoutonCustom>
    </div>
)

const mapStateToProps = ({ caddie: { caddieItems } }) => ({
    caddieItems
})

export default connect( mapStateToProps )(CaddieDropdown)