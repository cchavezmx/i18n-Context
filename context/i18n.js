import { useRouter } from 'next/router'
import { createContext, useContext } from 'react'
import es from 'translations/es'
import en from 'translations/en'

const lenguages = {
  es,
  en
}


const I18NContext = createContext()


export function I18NProvider({ children }) {
  const { locale } = useRouter()
  const t = (key, args) => {
    let translation = lenguages[locale][key]    

    if(translation.length === 0) {
      return translation
    }

    Object.entries(args).forEach(([key, value]) => {
      translation = translation.replace(`\${${key}}`, value)
    })

    return translation
  }

  return (
    <I18NContext.Provider value={{t}}> 
      {children}
    </I18NContext.Provider>
  )
}

export function useI18N() {
  const context = useContext(I18NContext)
  return context
}