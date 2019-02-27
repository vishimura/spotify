export const searchChanged = (e) => ({
    type: 'SEARCH_CHANGED',
    payload: e.target.value
})

export const filtroChanged = (e) => ({
    type: 'FILTRO_CHANGED',
    payload: e.target.value
})

