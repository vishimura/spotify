const INITIAL_STATE = {
    artistas: []
}

export default (state = INITIAL_STATE, actions ) => {
    
    switch(actions.type){
        case 'LIST_ARTISTS':
           return {...state, artistas:actions.payload}
        default:
            return state
    }
}