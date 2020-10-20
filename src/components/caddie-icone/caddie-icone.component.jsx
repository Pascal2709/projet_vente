import React from "react";
import { connect } from 'react-redux'
import { toggleCaddieHidden } from "../../redux/caddie/caddie.action";
import { selectCaddieCompteElements } from "../../redux/caddie/caddie.selectors";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg'

import './caddie-icone.styles.scss'

const CaddieIcon = ({toggleCaddieHidden, itemCompte}) => (
    <div className="caddie-icone" onClick={toggleCaddieHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-cpt">{itemCompte}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCaddieHidden: () => dispatch(toggleCaddieHidden())
})

const mapStateToProsp = ( state ) => ({
    itemCompte: selectCaddieCompteElements(state)
})

export default connect(mapStateToProsp, mapDispatchToProps)(CaddieIcon)