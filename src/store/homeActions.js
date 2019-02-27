import axios from  'axios'

const URL =  'https://api.spotify.com/v1/search?'

// export const estadoChanged = (e, value, name) =>({
//     type: 'ESTADO_CHANGED',
//     payload: name
// })

export const searchChanged = (e) => ({
    type: 'SEARCH_CHANGED',
    payload: e.target.value
})

// export const search = (artista = 'maria') =>{
//     fetch(`${URL}q=${artista}&type=artist`, {
//         headers: {
//             'Authorization': 'Bearer ' + accessToken,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }).then(response => response.json())
//         .then(data => this.setState({
//             artists: data.artists.items.map(item => {
//                 return {
//                     name: item.name,
//                     popularity: item.popularity,
//                     genres: item.genres,
//                     images: item.images
//                 }
//             })
//         })
//     )
// }


