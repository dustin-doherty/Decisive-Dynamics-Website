import { useContext } from "react";
import { NavigationContext, NavigationContextProps } from "./navigationContext";

export const useNavigation = (): NavigationContextProps => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
}; 