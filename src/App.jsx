import HeaderButton from './components/HeaderButton'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Profile from './components/Profile'

import './App.css'

import { LanguageContext } from './contexts/LanguageContext'
import { useContext } from 'react'





function App() {

  const { langData } = useContext(LanguageContext)
  return (
    <>
      <div className=" md:flex md:flex-col md:gap-4 md:max-w-[1200px] md:mx-auto ">
        <HeaderButton />
        <Header headerData={langData.header} />
        <Hero heroData={langData.hero} />
        <Skills skillsData={langData.skills} />
        <Profile profileData={langData.profile} />
        <Projects projectsData={langData.projects} />
      </div>
      <Footer footerData={langData.footer} />


    </>



  )
}

export default App
