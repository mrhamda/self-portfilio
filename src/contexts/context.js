"use client"

import React, { createContext, useState } from 'react';

// Create context
export const Context = createContext();

// Create a provider component
export function ContextProvider({ children }) {
    const [activeSidebar, setActiveSidebar] = useState(false);

    return (
        <Context.Provider value={{ activeSidebar, setActiveSidebar }}>
            {children}
        </Context.Provider>
    );
}
