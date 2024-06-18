import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import {Catalog} from './pages/Catalog'
import { Favourites } from './pages/Favourites'
import { NotFoundPage } from './pages/NotFoundPage'

import { Layout } from './components/Layout'

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Catalog/>}/>
          <Route path='favourites' element={<Favourites/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App
