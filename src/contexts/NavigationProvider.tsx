import React, { useState } from "react";
import { NavigationContext } from "./navigationContext";

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <NavigationContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </NavigationContext.Provider>
    );
}; 