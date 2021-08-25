import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import LayoutScatter from '../components/layoutScatter';

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

export default function Home() {

    function mouseover(event) {
        event.currentTarget.style.background = 'red';
        
    }

    function mouseleave(event) {
        event.currentTarget.style.removeProperty('color');
        event.currentTarget.style.removeProperty('background');
    } 
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper"
    >
        <Head>
            <title>Layout - 🌐 Brutalist.Website</title>
        </Head>
        <h1>Layout</h1>
        <Link href="/">&larr; 🏠 home</Link>
        
        <div>
            <section className="subpage_section section_layout_grid">
            
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>HUGE</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>VIBES</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}></div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}></div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>G</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>R</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>I</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>D</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}></div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}></div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>🍄</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>MUSHROOM</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>G</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>R</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>I</div>
                <div onMouseOver={mouseover} onMouseLeave={mouseleave}>D</div>
            </section>
            <LayoutScatter/>
        </div>
    </motion.div>
  )
}
