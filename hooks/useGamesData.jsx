import { useState, useEffect } from "react"
const baseURL = import.meta.env.VITE_BASE_URL
const gameEndPoint = import.meta.env.VITE_GAMES_ENDPOINT

export const useGamesData = () => {

    const [games, setGames] = useState([])

    useEffect(() =>
        async function getData() {
            try {
                const response = await fetch(baseURL + gameEndPoint)
                if (!response.ok) {
                    throw new Error("Errore nella richiesta HTTP");
                }
                const data = await response.json()
                setGames(data)
            } catch (error) {
                console.error("E' stato riscontrato un errore:", error.message)
            }
        }, [])

    return { games, setGames }
}

