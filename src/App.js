import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopping/shopping.component";
import LoginEtInscription from "./pages/login-et-inscription/login-et-inscription.component";
import Header from "./components/header/header.component";
import { auth, creerUserProfilDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import PanierPage from "./pages/panier/panier.component";


class App extends React.Component {

    deconnexionDeAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.deconnexionDeAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await creerUserProfilDocument(userAuth)

                userRef.onSnapshot(capture => {
                    setCurrentUser ({
                        currentUser: {
                            id: capture.id,
                            ...capture.data()
                        }
                    }
                 )

                })
            }else {
                setCurrentUser(userAuth)
            }
        })
    }

        componentWillUnmount()
        {
            this.deconnexionDeAuth()
        }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/Shopping' component={ShopPage} />
                    <Route path='/panier' component={PanierPage} />
                    <Route path='/inscription' component={LoginEtInscription} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App)
