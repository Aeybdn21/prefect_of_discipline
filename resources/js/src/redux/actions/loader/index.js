import { Actions } from "../../Actions";

export const loadingTrue = payload => dispatch => {
    dispatch({type: Actions.SET_LOADER, loading: true, display: true});
}

export const loadingFalseAnimated = (payload = 2000) => dispatch => {
   return new Promise((resolve) => {
    setTimeout(() => {
        dispatch({type: Actions.SET_LOADER, loading: false, display: true});
        setTimeout(() => {
            dispatch({type: Actions.SET_LOADER, loading: false, display: false});
            return resolve(true)
        }, payload);
    }, payload);
   })
}

export const loadingFalse = payload => dispatch => {
     dispatch({type: Actions.SET_LOADER, loading: false, display: false});
}