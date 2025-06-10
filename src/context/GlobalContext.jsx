import { createContext } from "react";
import { useGamesData } from "../../hooks/UseGamesData";
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const { games, setGames } = useGamesData()

    return (
        <GlobalContext.Provider value={{ games, setGames }}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }