
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
export const SideBarComponent = () => {
    const { favourites } = useContext(GlobalContext)
    return (
        favourites.length !== 0 && <div id="sidebar" style={{ width: "300px", backgroundColor: "rgb(10, 17, 20)", padding: "15px" }} >
            <h2 className="text-white">Favourites List</h2>
            <ul className="p-0">
                {favourites.map((element) => {
                    return <li
                        className="text-white list-unstyled p-3 rounded-3 mb-2"
                        style={{ backgroundColor: "rgb(15, 33, 41)" }}
                    >{element.title}</li>
                })}
            </ul>
        </div>
    )
}