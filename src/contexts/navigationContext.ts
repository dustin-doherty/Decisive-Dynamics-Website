import { createContext } from "react";

export interface NavigationContextProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined); 