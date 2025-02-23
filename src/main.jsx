import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageContextProvider from './contexts/LanguageContext.jsx'
import ThemeModeProvider from './contexts/ThemeMode.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </LanguageContextProvider>


)
