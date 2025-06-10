
import { GamesHome } from "./gamesHome"
import { useState } from "react"
import { Card } from "../components/Card"
import { useSingleGame } from "../../hooks/useSingleGame"

export const ComparePages = () => {

    const [selectedGameId1, setSelectedGameId1] = useState(null)
    const [selectedGameId2, setSelectedGameId2] = useState(null)


    // Chiamata doppia della hook, una per ogni id selezionato
    const { game: game1, img: img1, loading: loading1 } = useSingleGame(selectedGameId1)
    const { game: game2, img: img2, loading: loading2 } = useSingleGame(selectedGameId2)

    return (

        <div className="d-flex gap-5 p-5">
            {/* PRIMA CARD */}
            {selectedGameId1
                ? (loading1
                    ? <div>Loading...</div>
                    : <Card
                        img={img1}
                        title={game1?.videogame?.title}
                        platforms={game1?.videogame?.platforms}
                        developer={game1?.videogame?.developer}
                        releaseYear={game1?.videogame?.releaseYear}
                        userRating={game1?.videogame?.userRating}
                        multiplayer={game1?.videogame?.multiplayer === true ? "Available" : "Not Available"}
                        price={game1?.videogame?.price}
                        languages={game1?.videogame?.languages}
                        pegi={game1?.videogame?.pegi}
                    />)
                : <GamesHome overlayTxt={"Compare"} navigate={false} onSelectGame={setSelectedGameId1} />
            }

            {/* SECONDA CARD */}
            {selectedGameId2
                ? (loading2
                    ? <div>Loading...</div>
                    : <Card
                        img={img2}
                        title={game2?.videogame?.title}
                        platforms={game2?.videogame?.platforms}
                        developer={game2?.videogame?.developer}
                        releaseYear={game2?.videogame?.releaseYear}
                        userRating={game2?.videogame?.userRating}
                        multiplayer={game2?.videogame?.multiplayer === true ? "Available" : "Not Available"}
                        price={game2?.videogame?.price}
                        languages={game2?.videogame?.languages}
                        pegi={game2?.videogame?.pegi}
                    />)
                : <GamesHome overlayTxt={"Compare"} navigate={false} onSelectGame={setSelectedGameId2} />
            }
        </div>
    )
}

