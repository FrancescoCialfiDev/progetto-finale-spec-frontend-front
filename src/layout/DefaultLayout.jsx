import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../components/HeaderComponent"
export const DefaultLayout = () => {
    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
        </>
    )
}