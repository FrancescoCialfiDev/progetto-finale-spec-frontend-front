import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { TableComponent } from "../components/TableComponent"

export const WishListPage = () => {

    const { games, favourites } = useContext(GlobalContext)


    return (
        <>
            <div className="d-flex flex-column w-75 text-center">
                <h1 className="text-white pb-5">Whish List</h1>
                <TableComponent arr={favourites} />
            </div>
        </>
    )
}