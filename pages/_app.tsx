import { Navigation } from '../components/navigation';


import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp