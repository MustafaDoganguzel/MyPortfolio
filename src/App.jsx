import HeaderButton from './components/HeaderButton'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Profile from './components/Profile.Jsx'

import './App.css'



function App() {


  return (

    <div className="flex flex-col gap-4 max-w-[1440px] mx-auto">

      <HeaderButton />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>

  )
}

export default App
