const INITIAL_STATE = {
    dados: [],
    albums: [],
    openDialog: false
}

export default (state = INITIAL_STATE, actions ) => {
    switch(actions.type){
        case 'LIST_ARTISTS':
           return {dados:actions.payload.artists.items}
        case 'LIST_ALBUM':
        case 'ALBUMS_BY_ID':
            return {...state, albums: actions.payload, openDialog: true}
        default:
            return state
    }
}