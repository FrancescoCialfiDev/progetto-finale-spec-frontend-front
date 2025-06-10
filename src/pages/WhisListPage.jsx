import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { h1 } from "framer-motion/client"
export const WishListPage = () => {

    const { games } = useContext(GlobalContext)
    const [favourites, setFavourites] = useState([])

    return (
        <h1>Sono Whish List</h1>
    )
}