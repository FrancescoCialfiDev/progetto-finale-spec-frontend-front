import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import { Card } from "../components/Card"
import { useSingleGame } from "../../hooks/useSingleGame"

export const GameDetailsPage = () => {

    const { id } = useParams()
    const { game, loading, img } = useSingleGame(id)


    return (

        loading === true ? <div className="loader"><Loader /></div> :
            <div className="container ">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Card
                            img={img}
                            title={game?.videogame?.title}
                            platforms={game?.videogame?.platforms}
                            developer={game?.videogame?.developer}
                            releaseYear={game?.videogame?.releaseYear}
                            userRating={game?.videogame?.userRating}
                            multiplayer={game?.videogame?.multiplayer === true ? "Available" : "Not Available"}
                            price={game?.videogame?.price}
                            languages={game?.videogame?.languages}
                            pegi={game?.videogame?.pegi}
                        />
                    </div>
                </div>
            </div>

    )
}

