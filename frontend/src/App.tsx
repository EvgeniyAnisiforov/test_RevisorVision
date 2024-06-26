import "./App.css"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import { Catalog } from "./pages/Catalog/Catalog"
import { Favourites } from "./pages/Favourites/Favourites"
import { NotFoundPage } from "./pages/NotFoundPage"

import { Layout } from "./components/Layout/Layout"

function App() {
  return (
    <BrowserRouter basename="/test_RevisorVision">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
