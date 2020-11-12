import React from "react";
import { connect } from 'react-redux'
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shopping/shopping-selectors";

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
    const { titre, items } = collection
    return (
        <div className="collection-page">
            <h2 className='titre'>{titre}</h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
        </div>
    )
}

const mapStateToProps = (state, sesProps) => ({
    collection: selectCollection(sesProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)