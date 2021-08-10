// mode module
// ducks pattern
import produce from "immer";

// types
export const CHANGE_MODE = "mode/CHANGE_MODE";

// action creator
export const changeMode = () => {
    return {
        type: CHANGE_MODE,
    };
};

// reducer
const initialState = {
    isDark: true,
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case CHANGE_MODE:
                draft.isDark = !draft.isDark;
                break;
            default:
                break;
        }
    });
}
