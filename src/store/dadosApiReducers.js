const INITIAL_STATE = {
    dados: [],
    albums: [],
    tracks: [],
    tracksById: [],
    albumsById: [],
    openDialog: false
}

export default (state = INITIAL_STATE, actions ) => {
    switch(actions.type){
        case 'LIST_ARTISTS':
           return { dados:actions.payload.artists.items }
        case 'LIST_ALBUMS':
            return { albums:actions.payload.albums.items }
        case 'LIST_TRACKS':
            return { tracks:actions.payload.tracks.items }
        case 'ALBUMS_BY_ID':
            return { ...state, albumsById: actions.payload, openDialog: true }
        case 'TRACKS_BY_ID':
            return { ...state, tracksById: actions.payload, openDialog: true }
        default:
            return state
    }
}