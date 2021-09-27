import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'

import { Marquee } from './layout'
import EmojiRandom from '../components/EmojiRandom'

const variants = {
  initial: { 
    opacity: 0,
    y: '100vh',
  },
  enter: { 
    opacity: 1,
    y: '0',
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

const websafeColours = [
  '#FFFFFF',
  '#C0C0C0',
  '#808080',
  '#000000',
  '#FF0000',
  '#800000',
  '#FFFF00',
  '#808000',
  '#00FF00',
  '#008000',
  '#00FFFF',
  '#008080',
  '#0000FF',
  '#000080',
  '#FF00FF',
  '#800080'
]

export default function Colours() {
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper colours-page"
    >
        <Head>
            <title>Colours - 🌐 Brutalist.Website</title>
        </Head>
        
        <h1 className="page-title" style={{fontSize: '19.8vw'}}>Colours</h1>
        <Link href="/"><a className="back-link">&larr; 🏠 Home</a></Link>
        
        <div>
            <p className="info-block">Brutalist websites frequently use bright &amp; obnoxious colours to grab attention ⚠️</p>
            <Marquee>
              <div className="rainbow-stripe"></div>
              <div className="rainbow-stripe"></div>
            </Marquee>



            <EmojiRandom/>

            {/* <section className="subpage_section section_colours">
                <div style={{background: 'red'}}>red</div>
                <div style={{background: 'green'}}>green</div>
                <div style={{background: 'blue'}}>blue</div>
            </section> */}

            <section className="subpage_section section_websafe">
              <h1>BASIC HTML <span style={{fontFamily: "times new roman", fontWeight: 500}}>COLOURS</span>🎨</h1>

              <p className="info-block">The basic colors are 16 colors defined in the HTML 4.01 specification in 1999</p>
        
              <div className="websafe_table">
              {websafeColours.map(colour => (
                <div className="websafe_row">
                  <div className="websafe_colour_block" style={{backgroundColor: colour}}></div>
                  <div>{colour}</div>
                </div>
              ))}
              </div>
              

            </section>

            <section className="subpage_section section_pinwheel checker-bg">

                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04554 1.54443C6.819 1.64041 7.58642 1.88962 8.30385 2.30383C11.1736 3.96068 12.1569 7.63022 10.5 10.5C8.84315 7.63022 5.17361 6.64697 2.30385 8.30383C1.58746 8.71744 0.988625 9.25648 0.519081 9.87719C0.743771 6.22054 2.93355 3.09532 6.04554 1.54443Z" fill="url(#paint0_linear)"/>
                  <path d="M0.519078 9.87723C0.988622 9.25652 1.58745 8.71748 2.30385 8.30387C5.1736 6.64702 8.84315 7.63027 10.5 10.5C7.18629 10.5 4.5 13.1863 4.5 16.5C4.5 17.3277 4.6676 18.1163 4.97071 18.8336C2.27601 17.0421 0.5 13.9785 0.5 10.5C0.5 10.2909 0.506421 10.0832 0.519078 9.87723Z" fill="url(#paint1_linear)"/>
                  <path d="M4.97071 18.8336C4.6676 18.1163 4.5 17.3277 4.5 16.5C4.5 13.1863 7.18629 10.5 10.5 10.5C8.84315 13.3698 9.8264 17.0393 12.6962 18.6962C13.4136 19.1104 14.181 19.3596 14.9545 19.4555C13.6131 20.124 12.1005 20.5 10.5 20.5C8.4556 20.5 6.55448 19.8865 4.97071 18.8336Z" fill="url(#paint2_linear)"/>
                  <path d="M14.9545 19.4555C14.181 19.3596 13.4136 19.1104 12.6961 18.6962C9.82639 17.0393 8.84314 13.3698 10.5 10.5C12.1568 13.3698 15.8264 14.353 18.6961 12.6962C19.4125 12.2825 20.0114 11.7435 20.4809 11.1228C20.2562 14.7794 18.0664 17.9047 14.9545 19.4555Z" fill="url(#paint3_linear)"/>
                  <path d="M20.4809 11.1228C20.0114 11.7435 19.4125 12.2826 18.6962 12.6962C15.8264 14.353 12.1569 13.3698 10.5 10.5C13.8137 10.5 16.5 7.81373 16.5 4.50002C16.5 3.67232 16.3324 2.88377 16.0293 2.16644C18.724 3.95794 20.5 7.02158 20.5 10.5C20.5 10.7092 20.4936 10.9168 20.4809 11.1228Z" fill="url(#paint4_linear)"/>
                  <path d="M16.0293 2.16642C16.3324 2.88375 16.5 3.6723 16.5 4.5C16.5 7.81371 13.8137 10.5 10.5 10.5C12.1569 7.63024 11.1736 3.9607 8.30385 2.30385C7.58641 1.88964 6.81899 1.64043 6.04553 1.54445C7.38686 0.875988 8.89952 0.5 10.5 0.5C12.5444 0.5 14.4455 1.11349 16.0293 2.16642Z" fill="url(#paint5_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="5.91197" y1="1.54443" x2="5.91197" y2="10.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFD305"/>
                  <stop offset="1" stop-color="#FDCF01"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="5.5" y1="7.49902" x2="5.5" y2="18.8336" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#52CF30"/>
                  <stop offset="1" stop-color="#3BBD1C"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="9.72723" y1="10.5" x2="9.72723" y2="20.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#14ADF6"/>
                  <stop offset="1" stop-color="#1191F4"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="15.088" y1="10.5" x2="15.088" y2="19.4555" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#CA70E1"/>
                  <stop offset="1" stop-color="#B452CB"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear" x1="15.5" y1="2.16644" x2="15.5" y2="13.501" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF645D"/>
                  <stop offset="1" stop-color="#FF4332"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear" x1="11.2728" y1="0.5" x2="11.2728" y2="10.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FBB114"/>
                  <stop offset="1" stop-color="#FF9508"/>
                  </linearGradient>
                  </defs>
                </svg>

            </section>

            <section className="subpage_section section_complementary">

              <h2>complementary colours</h2>
              <div style={{backgroundColor: 'red'}}>
                <div className="inner"></div>
              </div>
              <div style={{backgroundColor: 'yellow'}}>
                <div className="inner"></div>
              </div>
              <div style={{backgroundColor: 'lime'}}>
                <div className="inner"></div>
              </div>
              <div style={{backgroundColor: 'aqua'}}>
                <div className="inner"></div>
              </div>
              <div style={{backgroundColor: 'blue'}}>
                <div className="inner"></div>
              </div>
              <div style={{backgroundColor: 'purple'}}>
                <div className="inner"></div>
              </div>

            </section>

        
           
        </div>
    </motion.div>
  )
}
