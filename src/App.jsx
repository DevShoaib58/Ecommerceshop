
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
import UserProfile from './Component/Feature/UserProfile'
import Quote from './Pages/Quote'
import Gallery from './Pages/Gallery'
import Post from './Pages/Post'
import Todo from './Pages/Todo'


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
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/post" element={<Post />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
