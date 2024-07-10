import React, {createContext, useReducer} from "react";


export const DataContext = createContext();

export const DataProvider = ({children, reducer, initialState}) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataContext.Provider>
  )
}
/*
1.usereduvcer yetekemnew hultunm dispatch and staten yeyazew slehone new */