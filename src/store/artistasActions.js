const URL =  'https://api.spotify.com/v1/search?'




export const searchArtista = (searchText, accessToken) =>{
    return dispatch => {
        fetch(`${URL}q=${searchText}&type=artist`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => dispatch(({type:'LIST_ARTISTS', payload: data.artists.items}))
        )
    }
}