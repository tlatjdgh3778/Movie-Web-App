// modal module
// ducks pattern

// types
export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';

// action creator
export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}

// reducer
const initialState = {
    isOpen: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                isOpen: !state.isOpen
            }
        default:
            return state
    }
}