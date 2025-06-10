import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GamesHome } from "./pages/gamesHome.jsx";
import { GameDetailsPage } from "./pages/GameDetailsPage.jsx";
import { DefaultLayout } from "./layout/DefaultLayout.jsx";
import { ComparePages } from "./pages/ComparePages.jsx";
import { WishListPage } from "./pages/WhisListPage.jsx";

function App() {
  return (

    <GlobalProvider>                                                  {/* GlobalProvider fornisce uno stato globale a tutti i componenti figli */}
      <BrowserRouter>                                                 {/* BrowserRouter abilita il sistema di routing basato su URL */}
        <Routes>                                                      {/* Routes è il contenitore delle varie Route */}
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/games">                                     {/* Route con layout condiviso tra più pagine */}
              <Route index element={<GamesHome />} />
              <Route path=":id" element={<GameDetailsPage />} />
              <Route path="compare" element={<ComparePages />} />
              <Route path="wishList" element={<WishListPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )

}

export default App
