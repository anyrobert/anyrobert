import { Navigation, Footer } from '../components';


import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp