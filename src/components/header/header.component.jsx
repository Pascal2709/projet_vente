import React from "react";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CaddieIcon from "../caddie-icone/caddie-icone.component";
import CaddieDropdown from "../caddie-dropdown/caddie-dropdown.component";
import { selectCaddieHidden } from "../../redux/caddie/caddie.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {ReactComponent as Logo} from '../../assets/couronne.svg'
import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shopping">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={ () => auth.signOut()}>
                        LOGOUT
                    </div>
                    :
                    <Link className="option" to="/inscription">
                        LOGIN
                    </Link>
            }
            <CaddieIcon />
        </div>
        {
            hidden ? null:
            <CaddieDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCaddieHidden
})
export default connect(mapStateToProps)(Header)