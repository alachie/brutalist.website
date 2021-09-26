import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'

import ImageSmear from '../components/image-smear'
import CylinderText from '../components/cylinder-text'
import MotionTrail from '../components/motionTrail'
import DVD from '../components/dvd'

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

export default function Interaction() {
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper"
    >
        <Head>
            <title>Interaction - 🌐 Brutalist.Website</title>
        </Head>
        <h1>Interaction</h1>
        <Link href="/">&larr; 🏠 home</Link>
        
        <div>
          
            <section className="subpage_section section_interaction">
              <ImageSmear/>
            </section>

            <section className="subpage_section section_interaction">
              <DVD/>
            </section>


            <section className="subpage_section section_interaction">
              <CylinderText/>
            </section>

            <section className="subpage_section section_interaction">
              <MotionTrail/>
            </section>

           
        </div>
    </motion.div>
  )
}
