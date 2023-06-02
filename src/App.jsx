
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage'
import NewsPage from './Pages/NewsPage'
import Category from './Pages/Category'
import SingleProduct from './Pages/SingleProduct'
import Header from './Component/Header'
import Footer from './Component/Footer/Footer'
import AllNews from './Pages/AllNews'
import Page404 from './Pages/Page404'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/allnews" element={<AllNews />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
