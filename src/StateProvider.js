//setup data layer
//We need this to track the basket

import React,{createContext, useContext, useReducer} from "react";

//This is a data layer
export const StateContext= createContext();

// Build a provider
export const StateProvider= ({reducer, initialState, children}) =>(
    <StateContext.Provider value={(useReducer(reducer,initialState))} >
        {children}
    </StateContext.Provider >

)
// in the above program we are using jsx so it will be ({reducer, initialState, children}) =>return({})  or simply({reducer, initialState, children}) => ({})

//This is how we need to us it inside of a component
//some changes for AMZ-101
export const useStateValue = () => useContext(StateContext);