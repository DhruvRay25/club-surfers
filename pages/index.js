import Head from 'next/head'
import Link from 'next/link'
import Navigation from './components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Club Surfers</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />

        <div class="container-fluid p-5 bg-dark text-white text-center">
          <h1>Club Surfers</h1>
        </div>

        <div class="container mt-5">
        </div>
      </main>
    </>
  )
}
