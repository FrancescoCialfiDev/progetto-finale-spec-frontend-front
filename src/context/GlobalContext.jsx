import { createContext, useState } from "react";
import { useGamesData } from "../../hooks/UseGamesData";
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const { games, setGames } = useGamesData()
    const [favourites, setFavourites] = useState([])

    return (
        <GlobalContext.Provider value={{ games, setGames, setFavourites, favourites }}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }