import React, { createContext, useContext, useReducer} from 'react';

// Prepares the data layer/ State layer
export const StateContext = createContext();

// Data/State provider 
// Wrap our app and provide data to every component
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info from the data layer
export const useStateValue = () => useContext(StateContext);