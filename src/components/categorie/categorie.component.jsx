import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { selectCategorieSections } from "../../redux/categorie/categorie.selectors";
import ChoixItem from "../choix-Item/choix-item.component";

import './categorie.styles.scss'

const Categorie = ({sections}) => (

   <div className="categories">
        {
           sections.map(({id, ...autreSectionProps}) => (
           <ChoixItem key={id} {...autreSectionProps} />
         ))
        }
      </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectCategorieSections
})

export default connect(mapStateToProps)(Categorie)