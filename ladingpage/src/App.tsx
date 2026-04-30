import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { NewsLetter } from './components/NewsLetter'
import { SectionBanner } from './components/Section-Banner'
import { SectionBrand } from './components/Section-Brand'
import { SectionCards } from './components/Section-Cards'
import { SectionProducts } from './components/Section-Products'

function App() {

  return (
    <div>
      <Header />
      <SectionBanner />
      <SectionCards />
      <SectionProducts />
      <SectionBrand />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
