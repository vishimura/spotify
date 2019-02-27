const INITIAL_STATE = {
    text: ''
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SEARCH_CHANGED':
            return { ...state, text: action.payload}
        default:
            return state
    }
}