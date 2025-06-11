// GENERAL IMPORT
import { useContext, useState, useEffect, useRef, useMemo, use } from "react" // Importiamo le main Hook di React.
import { GlobalContext } from "../context/GlobalContext" // Importiamo il contesto globale per accedere ai dati.
import { motion } from "framer-motion" // Libreria di animazioni per React.
import { TableComponent } from "../components/TableComponent"
import { Modal } from "../components/Modal"
import { createPortal } from "react-dom"
import { useCallback } from "react"


// VARIABILI DI AMBIENTE
const baseURL = import.meta.env.VITE_BASE_URL // Importiamo la nostra variabile di ambiente ( Url Base = "http://localhost:3001" ) Garantisce sicurezza dei dati.
const gameEndPoint = import.meta.env.VITE_GAMES_ENDPOINT // ( Endpoint = "/videogames" ) Per accedere alla url che fornisce i videogiochi in formato JSON

function debounce(callBack, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callBack(value)
        }, delay);
    }
}

export const GamesHome = ({ overlayTxt = "Show Details", navigate = true, onSelectGame }) => {

    // DEFINIAMO LE NOSTRE VARIABILI
    const { games } = useContext(GlobalContext) // Consumiamo il nostro contesto globale per ottenere i dati
    const [copyGames, setCopyGames] = useState(games) // Copia di games per evitare perdita di dati 

    const [queryTitle, setQueryTitle] = useState("") // Creiamo uno state per gestire il valore del campo di ricerca ( Title )
    const [categoryValue, setCategoryValue] = useState("") // Creiamo uno stato per gestire il valore delle categorie della ( Select )
    const [orderBy, setOrderBy] = useState("title") // Creiamo uno stato per gestire il valore del campo da riordinare ( Select Category - Title )
    const [position, setPosition] = useState(1) // Creiamo uno stato per gestire la posizione degli elementi nella tabella.
    const [isShow, setIsShow] = useState(false)
    const [gameId, setGameId] = useState(null)


    useEffect(() => {
        async function handleSearchTitle() {
            try {
                const response = await fetch(baseURL + gameEndPoint + `?search=${queryTitle}&category=${categoryValue}`);
                if (!response.ok) { throw new Error("Errore nella richiesta HTTP") };
                const data = await response.json()
                setCopyGames(data)
            }
            catch (error) { console.error(error) }
        }
        handleSearchTitle()
    }, [queryTitle, categoryValue])

    const handeChange = useCallback(debounce((event) => {
        setQueryTitle(event.target.value)
    }, 500), [])

    function handleSort(field) {
        if (field === orderBy) {
            setPosition(prev => prev * -1)
        } else {
            setOrderBy(field)
            setPosition(1)
        }
    }

    const sortedGames = useMemo(() => {
        const orderedGame = [...copyGames].sort((a, b) => {
            let result;
            if (orderBy === "title") {
                result = a.title.localeCompare(b.title)
            } else if (orderBy === "category") {
                result = a.category.localeCompare(b.category)
            }
            return result * position
        })
        return orderedGame
    }, [copyGames, orderBy, position])



    return (
        <div className=" w-75 d-flex flex-column align-items-start">
            <div className="d-flex">

                {/* Input Di Ricerca per Titolo */}
                <motion.input
                    initial={{ opacity: 0.5, x: -100, y: -150 }} transition={{ duration: 0.5 }} animate={{ opacity: 1, x: 0, y: 0 }}
                    type="text"
                    placeholder="Search a game"
                    className=" p-2 mb-2 bg-dark border-1 border-white text-white"
                    onChange={handeChange}
                />

                {/* Select per la selezione delle categorie */}
                <motion.select
                    initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 1.5 }} animate={{ opacity: 1 }}
                    name="category"
                    id="category"
                    style={{ backgroundColor: "#202932" }}
                    className="p-2 mb-2 ms-2 rounded-2 border-2 border-primary text-white"
                    value={categoryValue}
                    onChange={(event) => { setCategoryValue(event.target.value) }}
                >
                    <option defaultValue value="">Select a category</option>
                    {[...new Set(games.map((game) => game.category))].map((category, index) => <option key={index} value={category}>{category}</option>)}
                </motion.select>

                {/* Select per Ordinare in ordine alfabetico */}
                <motion.select
                    initial={{ opacity: 0 }} transition={{ delay: 0.7, duration: 1.5 }} animate={{ opacity: 1 }}
                    name="order"
                    id="order"
                    style={{ backgroundColor: "#202932" }}
                    className=" p-2 mb-2 ms-2 rounded-2 border-2 border-primary text-white"
                    onChange={(event) => handleSort(event.target.value)}
                >
                    <option defaultValue value="" disabled>Order for</option>
                    <option value="category" >Category A - Z</option>
                    <option value="title">Title A - Z</option>
                </motion.select>

                {/* Button per invertire i dati della tabella */}
                <motion.button
                    initial={{ opacity: 0 }} transition={{ delay: 0.9, duration: 1.5 }} animate={{ opacity: 1 }}
                    className="p-2 mb-2 ms-2 border-2 border-primary rounded-2 text-white"
                    onClick={() => { setPosition(prev => prev * -1) }}
                    style={{ backgroundColor: "#202932" }}
                >
                    Revert Fields
                </motion.button>

            </div>

            {/* Tabella dei videogiochi */}
            <TableComponent
                overlayTxt={overlayTxt}
                navigate={navigate}
                arr={sortedGames}
                onSelectGame={onSelectGame}
                onClick={(id) => { setGameId(id); setIsShow(true); }}
            />

            {createPortal(<Modal
                title={"Select an operation"}
                subTitle={"Are you sure you want to proceed?"}
                isShow={isShow}
                onClose={() => { setIsShow(false) }}
                gameId={gameId}
            />, document.body)}

        </div >
    )
}