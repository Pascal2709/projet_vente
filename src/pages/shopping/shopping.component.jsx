import React from "react";
import CollectionEnsemble from "../../components/collection-ensemble/collection-ensemble.component";
import { Route } from 'react-router-dom'
import CollectionPage from "../collection/collection.component";
import './shopping.styles.scss'


const ShopPage =( { match }) => (
    <div className='shop_page'>
        <Route exact path={`${match.path}`} component={CollectionEnsemble} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default ShopPage