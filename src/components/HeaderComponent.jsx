import { Link } from "react-router-dom"

export const HeaderComponent = () => {
    return (
        <header>
            <div className="h-100 d-flex">
                <img src="/logo.png" height="80px" alt="logo" />
                <ul className=" ms-2 h-100 d-flex list-unstyled gap-3 text-light align-items-center">
                    <Link to="/">Home Page</Link>
                    <Link to="/games">All Games</Link>
                    <Link to="games/compare">Compare</Link>
                    <Link to="games/wishList">Wish List</Link>
                </ul>
            </div>
        </header >
    )
}