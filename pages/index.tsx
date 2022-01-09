import { About } from '../components'

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>anyrobert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  )
}

export default Home
