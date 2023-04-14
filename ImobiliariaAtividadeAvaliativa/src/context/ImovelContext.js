import React, {createContext, useReducer} from 'react'
import imoveis from '../data/imovel'

const initialState = {
    imoveis: imoveis
}

const ImovelContext = createContext({})

export const ImovelProvider = (props) => {

    function reducer(state, action) {
        if (action.action === 'salvar') {
            return {
                ...state,
                imoveis: [...state.imoveis, action.value]
            }
        }
        else if(action.action === 'editar') {
            const newImoveis = state.imoveis.map(imovel =>
                imovel.id === action.value.id ? action.value : imovel)
            return {
                ...state,
                imoveis: newImoveis
            } 
        }
        /*if (action.action === 'salvar') {
            const newImoveis = state.imoveis.map(imovel =>
                imovel.id === action.value.id) //This fails because we're just returning booleans or somethin'.
            return {
                ...state,
                imoveis: newImoveis
            }
        } */
        else if (action.action === 'remover') {
            const newImoveis = state.imoveis.filter(imovel => 
                imovel.id !== action.value.id)
            return { 
                ...state,
                imoveis: newImoveis
            }
        }
        else if (action.action === 'finalizar') {
            const newImoveis = state.imoveis.map(imovel =>
                imovel.id === action.value.id ? { ...imovel, isLocado: true } : imovel
            )
            return {
                ...state,
                imoveis: newImoveis
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ImovelContext.Provider value={{
            state, dispatch
        }}>
            {props.children}
        </ImovelContext.Provider>
    )
}

export default ImovelContext