import React from "react";

import './bouton-custom.styles.scss'

const BoutonCustom = ({ children, isGoogleLogin , inverse, ...otherProps}) => (
    <button className={`${ inverse ? 'inverse' : ''} ${isGoogleLogin ? 'google-login' : ''} bouton-custom`}
            {...otherProps}
    >
        {children}
    </button>
)

export default BoutonCustom