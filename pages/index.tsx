import type { NextPage } from 'next'
import Head from 'next/head'
import {globalStore} from '../store'

const Home: NextPage = () => {
    const bears = globalStore((state) => state.bears)
    const increasePopulation = globalStore((state) => state.increasePopulation)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className='text-3xl'>{bears}</div>
      <button onClick={increasePopulation} className='border bg-blue-50 p-4 m-4 active:bg-blue-100'>+</button>
      </main>

      <footer>
asd
      </footer>
    </div>
  )
}

export default Home
