import React, {createContext, userReducer } from 'react';
import AppReducer from './AppReducer'


// Initial State
const initialState ={
    transactions: [
        {id : 1, text: "book", amount: -20},
        {id : 2, text: "cookie", amount: 400},
        {id : 3, text: "bread", amount: 50},
        {id : 4, text: "vegie", amount: -600},
    ]
}

// Create Context 
export const GlobalContext = createdContext(initialState);


// Provider Component
export const GlobalProvider = ( {children} ) =>{
    const [state, dispatch] = userReducer(AppReducer);

    return (<GlobalContext.Provider value={{transactions : state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}