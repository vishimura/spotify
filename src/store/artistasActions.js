const URL = 'https://api.spotify.com/v1/search?'




export const searchArtista = (searchText, accessToken, filtro) => {
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

    if (filtro === 'artist') {
        console.log('aqui')
        dispatch({ type: 'LIST_ARTISTS', payload: data })
    }
    else if (filtro == 'album')
        dispatch({ type: 'LIST_ALBUM', payload: data })
    else if (filtro == 'track')
        dispatch({ type: 'LIST_TRACK', payload: data })
}