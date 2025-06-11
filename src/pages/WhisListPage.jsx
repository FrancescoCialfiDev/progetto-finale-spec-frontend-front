import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { TableComponent } from "../components/TableComponent"

export const WishListPage = () => {

    const { favourites, setFavourites } = useContext(GlobalContext)


    return (
        <>
            <div className="d-flex flex-column w-75 text-center">
                <h1 className="text-white pb-5">Whish List</h1>
                <TableComponent
                    overlayTxt={"Remove From Favourite"}
                    navigate={false}
                    arr={favourites}
                    onSelectGame={(id) => { setFavourites(prev => prev.filter(game => game.id !== id)); alert("Card Eliminata correttamente") }}
                />
            </div>
        </>
    )
} 