import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jsonData from '../data.json'

export const LanguageContext = createContext();


export default function LanguageContextProvider({ children }) {
    const langOption = localStorage.getItem('language') || "tr" // localde varsa al yoksa default tr gelsin

    const [lang, setLang] = useState(langOption)
    const [langData, setLangData] = useState({})

    const handleLangChange = () => {
        setLang(prevData => {

            const newLang = prevData === 'tr' ? 'en' : 'tr'
            localStorage.setItem('language', newLang)
            return newLang;
        })


    }

    useEffect(() => {
        axios.post('https://reqres.in/api/workintech', jsonData)
            .then((response) => {
                setLangData(response.data[lang])
            })

    }, [lang])

    return <LanguageContext.Provider value={{ lang, handleLangChange, langData }} >
        {children}
    </LanguageContext.Provider>
}