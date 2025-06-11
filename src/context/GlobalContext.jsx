import { createContext, useState, useEffect } from "react";
import { useGamesData } from "../../hooks/UseGamesData";
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const { games, setGames } = useGamesData()
    const [favourites, setFavourites] = useState(() => {
        const savedGame = localStorage.getItem("wishList")
        return savedGame ? JSON.parse(savedGame) : []
    })
    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(favourites));
    }, [favourites]);


    return (
        <GlobalContext.Provider value={{ games, setGames, setFavourites, favourites }}>
            {children}
        </GlobalContext.Provider>
    )

}

export { GlobalContext, GlobalProvider }