import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from './src/views/IndexPage';
import FavoritesPage from "./src/views/FavoritesPage";
import Layout from "./src/layout/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<IndexPage/>} index />
            <Route path='/favoritos' element={<FavoritesPage/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
