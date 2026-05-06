import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ---------------StyleSheets-------------
import './App.css'
import "./assets/Style/variables.css";
import "./assets/Style/footer.css";
import "./assets/Style/header.css";

// ---------------Pages-------------
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'

import SinglePost from './pages/SinglePost.jsx';

// ---------------Components-------------
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home title={"Home"}/>} />
          <Route path='/services' element={<Home title={"Services"}/>} />
          <Route path='/about' element={<About title={"About Us"}/>} />
          <Route path='/blog' element={<Blog title={"Resource Center"}/>} />
          <Route path='/contact' element={<Contact title={"Contact Us"}/>} />
          <Route path='/blog/:slug' element={<SinglePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App