import Head from 'next/head'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}
