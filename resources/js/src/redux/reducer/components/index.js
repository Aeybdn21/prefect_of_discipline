import { Actions } from "../../Actions"

const initState = {
    loading: false,
    display: false,
}


export const loaderComponent = (state = initState, actions) => {
    switch(actions.type) {
        case Actions.SET_LOADER: 
        return {...state, loading: actions.loading, display: actions.display};
        default: return state;
    }
}

