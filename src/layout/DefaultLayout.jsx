import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../components/HeaderComponent"
import { SideBarComponent } from "../components/SideBarComponent"
export const DefaultLayout = () => {
    return (
        <>
            <HeaderComponent />
            <div className="d-flex">
                <SideBarComponent />
                <main>
                    <Outlet />
                </main>
            </div>

        </>
    )
}