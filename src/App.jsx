
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './Pages/HomePage'
import NewsPage from './Pages/NewsPage'
import Category from './Pages/Category'
import SingleProduct from './Pages/SingleProduct'
import Header from './Component/Header'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
