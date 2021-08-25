import '../styles/globals.css'
import '../styles/layout.css'

import { useRouter } from 'next/router'
import { AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.pathname}/>
    </AnimatePresence>
  )
}

export default MyApp
