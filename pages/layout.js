import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import classNames from 'classnames'

import LayoutScatter from '../components/layoutScatter'
import FourQuads from '../components/fourQuads'

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

export function Marquee({right, children, className}) {
    return (
        <div className={classNames("marquee-wrapper", className, {"marquee-right": right})}>
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
        </div>
    )
}


export default function Home() {

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, [])

  // function handleScroll(e) {
  //   console.log(window.scrollY)
  //   document.querySelector('.page-title').style.position = 'absolute'
  //   document.querySelector('.page-title').style.top = window.scrollY * 2
  //   document.querySelector('.page-title').style.transform = `scale(${ (window.innerHeight / window.scrollY) * 0.1})`
  // }

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
        <h1 className="page-title">Layout</h1>
        <Link href="/"><a className="back-link">&larr; 🏠 Home</a></Link>
        
        <div>
            <section className="subpage_section section_layout_grid">
                <div>BRUTALIST</div>
                <div>WEBSITE</div>
                <div></div>
                <div></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div></div>
                <div></div>
                <div>🍄</div>
                <div>MUSHROOM</div>
                <div></div>
                <div>GRID</div>
                <div></div>
                <div></div>
            </section>
            <LayoutScatter/>

            <section className="subpage_section section_layout_marquee">
              <Marquee>
                <div>👋</div>
                <div>hello</div>
                <div>🌏</div>
                <div>world</div>
            </Marquee>
            <Marquee right>
                <div>marquee&nbsp;</div>
                <div>marquee&nbsp;</div>
                {/* <div>marquee&nbsp;</div>
                <div>marquee&nbsp;</div> */}
            </Marquee>
            <Marquee>
                <div>Huge</div>
                <div>⚠️</div>
                <div>vibes</div>
                <div>🚧</div>
            </Marquee>
            <Marquee right>
                <div>Brutalist</div>
                <div>⚠️</div>
                <div>Websites</div>
                <div>🚧</div>
            </Marquee>

            <Marquee className="marquee-diagonal">
                <div>Huge</div>
                <div>⚠️</div>
                <div>vibes</div>
                <div>🚧</div>
            </Marquee>

            </section>

            <FourQuads/>
            <Marquee>
                <div style={{fontSize: '3vw', fontWeight: 'bold'}}>layout&nbsp;</div>
                <div style={{fontSize: '3vw', fontWeight: 'bold'}}>layout&nbsp;</div>
            </Marquee>

            <section className="subpage_section section_layout_two_cols">
                <div>
                  <h2>TWO</h2>
                  <h2>COLUMNS</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi quas iusto, officia ab laboriosam culpa sit nam, qui tempora, eum quam dolorem! Aut deleniti ducimus fugit sit assumenda officiis.</p>
                </div>
                <div>
                  {/* <h2 style={{textAlign: 'right'}}>COLUMNS</h2> */}
                  <h2 style={{textAlign: 'right', writingMode: 'vertical-rl', float: 'right'}}>ROTATED</h2>
                  <h2 style={{textAlign: 'right', writingMode: 'vertical-rl', float: 'right'}}>TEXT</h2>
                  <h2>🌳</h2>
                  <h2>🌿</h2>
                  <h2>✨</h2>
                  <h2>🧙‍♂️</h2>
                  <h2 style={{textAlign: 'right', fontSize: '4vw'}}>WWW 🌐</h2>
                  <p>Neque amet aliquet consequat per ac ullamcorper pulvinar lorem, dui mattis congue eget eros iaculis nostra litora, condimentum vel facilisi laoreet porta dignissim himenaeos. Ultricies malesuada feugiat volutpat leo, facilisi per at dignissim, ut vulputate senectus. Fusce cursus imperdiet netus ultrices sociis eu aenean placerat, sed mollis augue congue accumsan consequat ullamcorper tortor suscipit, quisque lorem habitasse odio aliquam conubia montes. Commodo rhoncus eros ultrices netus tristique arcu leo torquent, taciti amet ad aenean scelerisque in lobortis, inceptos ultricies ridiculus congue blandit phasellus laoreet. Quisque aliquam consectetur dignissim lacinia sollicitudin torquent magnis luctus, accumsan congue habitant primis viverra lorem feugiat, dolor inceptos malesuada nullam morbi mattis rutrum. Gravida sollicitudin nisi purus nascetur sociis congue lorem, lobortis aenean libero habitasse sociosqu maecenas senectus, hendrerit fames torquent habitant dolor aliquam. Magnis mattis tellus sociis dignissim lectus, elementum placerat ad convallis venenatis, nullam elit commodo pretium. Ridiculus est quis enim dolor elementum sagittis turpis in posuere magna, dictum nisl ipsum non iaculis cubilia lectus blandit mus, lacinia egestas curae aliquet proin ullamcorper sed laoreet porta.</p>
                  
                </div>

            </section>
        </div>
    </motion.div>
  )
}
