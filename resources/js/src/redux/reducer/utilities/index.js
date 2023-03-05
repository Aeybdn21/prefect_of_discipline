import { Actions } from "../../Actions"

const initState = {
    utilsdata: [],
    error: false,
}


export const caseStatuses = (state = initState, action) => {
    switch(action.type) {
        case Actions.CASE_PARTIES: return {...state, utilsdata: action.data};
        default: return state;
    }
}

export const categoryCase = (state = initState, action) => {
    switch(action.type) {
        case Actions.CATEGORY_CASE: return {...state, utilsdata: action.data};
        default: return state;
    }
}
