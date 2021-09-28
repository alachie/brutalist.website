import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/type.css'
import '../styles/interaction.css'
import '../styles/colours.css'

import {React, useState, useEffect} from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { AnimatePresence} from 'framer-motion'

const isBrowser = typeof window !== 'undefined'

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (isBrowser) {
      document.documentElement.classList.toggle('is-loading', isLoading)
    }
  }, [isLoading])
  
  // The scroll location on the page is not restored on history changes
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [router])

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      // Bail if we're just changing a URL parameter
      if (
        url.indexOf('?') > -1 &&
        url.split('?')[0] === router.asPath.split('?')[0]
      )
        return

      // Otherwise, start loading
      setLoading(true)
    })

    Router.events.on('routeChangeComplete', () => {
      setTimeout(() => setLoading(false), 1200) // accounts for page transition
    })

    Router.events.on('routeChangeError', () => {
      setLoading(false)
    })

    // document.documentElement.style.fontSize = localStorage.getItem('fontSize') + 'px';
    // document.documentElement.style.setProperty('--background', localStorage.getItem('bgColor'));
  }, [])

  return (
    <div>
      {isLoading && (
        <Head>
          <title>Loading...</title>
        </Head>
      )}

      <AnimatePresence onExitComplete={() => {
        window.scrollTo(0, 0)
      }}>
        <Component {...pageProps} key={router.pathname}/>
        <div id="modal-root"></div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
