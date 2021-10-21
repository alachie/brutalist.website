import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import DrawBg from '../components/drawBg'
import {Marquee} from '../pages/layout'
import {Modal} from '../pages/typography'

const variants = {
  initial: { 
    opacity: 0,
    y: '100vh',
    // top: '0',
    // position: 'absolute'
  },
  enter: { 
    opacity: 1,
    y: '0',
    // position: 'static',
    transition: {
      duration: .6,
      ease: [.61,.43,.12,.96]
    } 
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .6,
      ease: [.61,.43,.12,.96]
    } 
  }
}

export default function About() {
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper about-page"
    >
        <Head>
            <title>About - 🌐 Brutalist.Website</title>
        </Head>

        <div className="about-page-inner">
          <h1 className="page-title" style={{fontSize: '14.3vw'}}>About</h1>
          <Link href="/"><a className="back-link">&larr; 🏠 Home</a></Link>

          <Marquee right>
            <div>Brutalist</div>
            <div>⚠️</div>
            <div>Websites</div>
            <div>🚧</div>
          </Marquee>

          <p className="about-info">As far back 2014, a niche trend of “Brutalist websites” began to emerge on the World Wide Web 🌐. Websites which design deliberately rejects modern design standards, favouring a more “raw” and experimental approach, harkening back to early 90s web design. </p>
          <p className="about-info">This website aims to be a showcase of different brutalist elements, commonly used design patterns, and aesthetic signifires.</p>


          <motion.div className="about-box" drag dragMomentum={false}>
            <h2>🔬 Research Question</h2>
            <p>Investigating the aesthetic signifiers of brutalist web design through the creation of an educational website/interactive experience, as practice-based research.</p>
          </motion.div>

          <section className="about-credits">
            <h2>🗄️ Archives</h2>

            <p>These websites are great resources to find more brutalist websites and were incredibly helpful during my research.</p>
            <table>
              <tbody>
                <tr>
                  <td>https://brutalistwebsites.com/</td>
                </tr>
                <tr>
                  <td>https://hoverstat.es/</td>
                </tr>
                <tr>
                  <td>https://hallointer.net/</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="about-credits">
            <h2>📝 Credits</h2>
            <table>
              <tbody>
                <tr>
                  <td>Site by</td>
                  <td>Lachie</td>
                </tr>
                <tr>
                  <td>Bliss.jpg	</td>
                  <td>&copy; Microsoft</td>
                </tr>
                <tr>
                  <td>Image smear inspired by</td>
                  <td>http://studio-push.com/</td>
                </tr>
                <tr>
                  <td>Three.js Motion Trail by</td>
                  <td>https://tympanus.net/codrops/2021/07/21/creating-a-typography-motion-trail-effect-with-three-js/</td>
                </tr>
                <tr>
                  <td>Flying Toasters by </td>
                  <td>Bryan Braun https://github.com/bryanbraun/after-dark-css</td>
                </tr>

              </tbody>
            </table>
          </section>
          
          <p style={{fontSize: '10vw', textAlign: 'center', margin: 0}}>
            &copy; 2021
          </p>
          <p style={{fontSize: '2vw', textAlign: 'center'}}><a href="https://hugevib.es/" target="_blank">https://hugevib.es/</a></p>

        </div>

        

        {/* <DrawBg/> */}


        {/* <Modal>
          <div className="about-draw-bg">
            <DrawBg/>
          </div>
        </Modal> */}
    </motion.div>
  )
}
