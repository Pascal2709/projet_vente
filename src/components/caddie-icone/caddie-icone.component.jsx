import React from "react";
import { connect } from 'react-redux'
import { toggleCaddieHidden } from "../../redux/caddie/caddie.action";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg'

import './caddie-icone.styles.scss'

const CaddieIcon = ({toggleCaddieHidden}) => (
    <div className="caddie-icone" onClick={toggleCaddieHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-cpt">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCaddieHidden: () => dispatch(toggleCaddieHidden())
})

export default connect(null, mapDispatchToProps)(CaddieIcon)