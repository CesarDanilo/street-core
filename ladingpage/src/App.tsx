import './App.css'
import { Header } from './components/Header'
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
    </div>
  )
}

export default App
