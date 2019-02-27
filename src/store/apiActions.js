const URL = 'https://api.spotify.com/v1/search?'




export const searchApi = (searchText, accessToken, filtro) => {
    
    return dispatch => {
        fetch(`${URL}q=${searchText}&type=${filtro}`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => escolherAcao(dispatch, data, filtro)
        )
    }
}

const escolherAcao = (dispatch, data, filtro) => {

    if (filtro === 'artist') 
        dispatch({ type: 'LIST_ARTISTS', payload: data })
    else if (filtro == 'album')
        dispatch({ type: 'LIST_ALBUM', payload: data })
    else if (filtro == 'track')
        dispatch({ type: 'LIST_TRACK', payload: data })
}

export const searchAlbumById = (id, accessToken) => {
    return dispatch => {
        fetch(`https://api.spotify.com/v1/artists/${id}/albums?market=ES&limit=5`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => dispatch(({ type: 'ALBUMS_BY_ID', payload: data.items }))
        )
    }
}



export const searchTracksById = (id, accessToken) => {
    return dispatch => {
        fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => dispatch(({ type: 'TRACKS_BY_ID', payload: data.items }))
        )
    }
}