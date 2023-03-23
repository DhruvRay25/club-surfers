import Head from 'next/head'
import Link from 'next/link'

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
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" href="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">About</Link>
              </li>
            </ul>
          </div>

        </nav>

        <div class="container-fluid p-5 bg-dark text-white text-center">
          <h1>Club Surfers</h1>
        </div>

        <div class="container mt-5">
        </div>
      </main>
    </>
  )
}
