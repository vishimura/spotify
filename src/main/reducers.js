import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import search from '../store/searchReducers'
import artistas from  '../store/artistasReducers'

const rootReducer = combineReducers({
    exemple: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{
            _id: 2,
            description: 'Reunião às 10h',
            done: false
        }]
    }),
    search: search,
    artistas: artistas,
    form: formReducer 
})

export default rootReducer