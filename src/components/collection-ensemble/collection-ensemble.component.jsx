import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import ApercuCollection from "../apercu-collection/apercu-collection.component";
import { selectCollectionsPourEnsemble } from "../../redux/shopping/shopping-selectors";

import './collection-ensemble.styles.scss'

const CollectionEnsemble = ({ collections }) => (
    <div className="collection-ensemble">
        {collections.map(({
            id, ...othercollectionprops
        }) => (
            <ApercuCollection key={id} {...othercollectionprops} />
        )
      )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPourEnsemble
})

export default connect(mapStateToProps) (CollectionEnsemble)