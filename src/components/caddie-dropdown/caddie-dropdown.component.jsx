import React from "react";
import { connect } from 'react-redux'

import BoutonCustom from "../bouton_custom/bouton-custom.component";
import CaddieItem from "../caddie-item/caddie-item.component";
import { selectCaddieItems } from "../../redux/caddie/caddie.selectors";


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

const mapStateToProps = ( state ) => ({
    caddieItems: selectCaddieItems(state)
})

export default connect( mapStateToProps )(CaddieDropdown)