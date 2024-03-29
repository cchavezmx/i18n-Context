import '../styles/globals.css'
import { I18NProvider } from 'context/i18n'

function MyApp({ Component, pageProps }) {
  return (
    <I18NProvider>
      <Component {...pageProps} />
    </I18NProvider>
  )
}

export default MyApp
