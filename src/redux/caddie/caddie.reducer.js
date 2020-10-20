import CaddieActionTypes from "./caddie.types";

const INITIAL_STATE = {
    hidden: true
}

const caddieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CaddieActionTypes.TOGGLE_CADDIE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default caddieReducer