const INITIAL_STATE = {
    text: '',
    filtro: ''
}

export default (state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SEARCH_CHANGED':
            return { ...state, text: action.payload}
        case 'FILTRO_CHANGED':
            return { ...state, filtro: action.payload}
        default:
            return state
    }
}
