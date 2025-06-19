import { useState, useEffect } from "react";
const baseURL = import.meta.env.VITE_BASE_URL;
const gamesEndPoint = import.meta.env.VITE_GAMES_ENDPOINT;

export function useSingleGame(id) {
    const [game, setGame] = useState(null); // Stato per singolo gioco
    const [img, setImg] = useState(""); //Stato per l'immgaine
    const [loading, setLoading] = useState(false); // Stato per la gestione del loader

    useEffect(() => {
        if (!id) return;
        async function getData() {
            setLoading(true);
            try {
                const response = await fetch(baseURL + gamesEndPoint + `/${id}`);
                if (!response.ok) throw new Error("Errore nella richiesta HTTP");
                const data = await response.json();
                setGame(data);

                if (data?.videogame?.title) {
                    const response2 = await fetch(
                        `https://api.rawg.io/api/games?key=ac62c1974efe4957840c442a6a36f444&search=${encodeURIComponent(data.videogame.title)}`
                    );
                    if (response2.ok) {
                        const data2 = await response2.json();
                        console.log(data2)
                        setImg(data2.results[0]?.background_image || ""); // Optional chaining operator
                    }
                }
            } catch (error) {
                setGame(null);
            }
            setLoading(false);
        }
        getData();
    }, [id]);

    return { game, img, loading };
}