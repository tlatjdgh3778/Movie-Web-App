// modal module
// ducks pattern
import produce from "immer";

// types
export const TOGGLE_MODAL = "modal/TOGGLE_MODAL";

// action creator
export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL,
    };
};

// reducer
const initialState = {
    isOpen: false,
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case TOGGLE_MODAL:
                draft.isOpen = !draft.isOpen;
                break;
            default:
                break;
        }
    });
}
