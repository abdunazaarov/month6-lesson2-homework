import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Category from './components/categories/Category'
import Product from './components/product/Product'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <Product/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
