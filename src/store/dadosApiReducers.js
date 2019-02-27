const INITIAL_STATE = {
    dados: []
}

export default (state = INITIAL_STATE, actions ) => {
    console.log(actions.payload)
    switch(actions.type){
        case 'LIST_ARTISTS':
           return {dados:actions.payload.artists.items}
        case 'LIST_ALBUM':
        
        default:
            return state
    }
}