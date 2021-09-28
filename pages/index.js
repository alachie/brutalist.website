import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import classNames from 'classnames';
import useLocalStorage from '../lib/useLocalStorage';

import DrawBg from '../components/drawBg';

const variants = {
  initial: { 
    opacity: 0,
  },
  enter: { 
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .6,
      ease: [.61,.43,.12,.96]
    } 
  }
}

const fadeIn = {
  initial: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: .1,
      ease: [.61,.43,.12,.96]
    } 
  },
  exit: {
    opacity: 1,
  }
}


export default function Home() {
  const List = useRef();
  
  const useSSRLocalStorage = (key, initial) =>
    typeof window !== "undefined" ? useLocalStorage(key, initial) : [initial];

  // const [showAbout, setAbout] = useState(false)
  // const [showQuestion, setQuestion] = useState(false)
  const [reload, setReload] = useState(0)

  // const [z, setZ] = useState(1)
  // const updateZ = (event) => {
  //   setZ(z + 1)
  //   event.currentTarget.style.zIndex = z;
  // }

  const [fontSize, setFontSize] = useSSRLocalStorage('fontSize', 16)
  const [bgColour, setBgColour] = useSSRLocalStorage('bgColor', 'lightgrey')
  const [font, setFont] = useSSRLocalStorage('font', 'helvetica')
  const [displayMode, setDisplayMode] = useSSRLocalStorage('display', 'grid')

  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

  useEffect(() => {

    if(!displayMode === 'grid'){
      return;
    }

    if(displayMode === 'grid'){
      const children = Array.prototype.slice.call(document.querySelectorAll('ol li, .about-box'))
      children.forEach((item) => {
        item.style.position = 'absolute';
        item.style.left = getRandom(0, window.innerWidth - 200) + 'px';
        item.style.top = getRandom(0, window.innerHeight - 200) + 'px';
      }) 
    }

    if(displayMode === "list") {
      const children = Array.prototype.slice.call(document.querySelectorAll('ol li, .about-box'))
      children.forEach((item) => {
        item.style.removeProperty('position');
        item.style.removeProperty('left');
        item.style.removeProperty('top');
      }) 

      const aboutBoxes = Array.prototype.slice.call(document.querySelectorAll('.about-box'))
      aboutBoxes.forEach((item) => {
        item.style.position = 'absolute';
        item.style.left = getRandom(0, window.innerWidth - 200) + 'px';
        item.style.top = getRandom(0, window.innerHeight - 200) + 'px';
      }) 
    }
  }, [reload, displayMode])

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize + 'px';
  }, [fontSize])

  useEffect(() => {
    document.documentElement.style.setProperty('--background', bgColour);
  }, [bgColour])

  useEffect(() => {
    document.documentElement.style.fontFamily = font;
  }, [font])

  const onFontChange = (e) => {
    setFontSize(e.target.value)
  }

  const onBgChange = (e) => {
    setBgColour(e.target.value)
  }
  const handleFontSelect = (e) => {
    setFont(e.target.value)
  }

  useEffect(() => {
    if(displayMode === "list") {
      List.current.classList.add('display_list')
    }
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <Head>
        <title>🌐 Brutalist.Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>🌐 Brutalist.Website</h1>

      <motion.ol ref={List} className={classNames({"display_list": (displayMode === "list")})}
        initial="initial" animate="visible" exit="exit" variants={{
          exit: {
            transition: { staggerChildren: .1}
          },
          visible: {
            transition: { staggerChildren: 0.1}
          }
        }}
      >
        <motion.li variants={fadeIn}><Link href="/layout">Layout</Link></motion.li>
        <motion.li variants={fadeIn}><Link href="/typography">Typography</Link></motion.li>
        <motion.li variants={fadeIn}><Link href="/interaction">Interaction</Link></motion.li>
        <motion.li variants={fadeIn}><Link href="/colours">Colours</Link></motion.li>
        <motion.li variants={fadeIn}><Link href="/about">About</Link></motion.li>
      </motion.ol>
      
      {/* {showQuestion && <motion.div className="about-box" drag dragMomentum={false} onMouseDown={updateZ}>
        <h2>🔬 Research Question</h2>
        <p>Investigating the aesthetic signifiers of brutalist web design through the creation of an educational website/interactive experience, as practice-based research.</p>
        <button onClick={() => {setQuestion(false)}}>&times;</button>
      </motion.div>} */}
{/* 
      {showAbout && <motion.div className="about-box" drag dragMomentum={false} onMouseDown={updateZ}>
        <h2>🤔 About</h2>
        <p>Feugiat massa amet mauris condimentum eget, sociis conubia ridiculus morbi.</p>
        <button onClick={() => {setAbout(false)}}>&times;</button>
      </motion.div>} */}

      <DrawBg/>
      <footer>
        <div>
          <button onClick={() => {setReload(reload + 1)}}>♻️ Reload</button>
          <button onClick={() => {setDisplayMode('grid')}}>Scatter</button>
          <button onClick={() => {setDisplayMode('list')}}>List</button>
          <input type="range" min="16" max="30" value={fontSize} onChange={onFontChange} step="0.1" />
          <input type="color" value="#ff0000" value={bgColour} onChange={onBgChange}/>
          
          <select name="font" onChange={handleFontSelect} value={font}>
            <option value="helvetica">Sans-serif</option>
            <option value="times new roman">Serif</option>
            <option value="display">display</option>
            <option value="chomsky">blackletter</option>
            <option value="comic sans ms">humour</option>
          </select>
        </div>
        <div>&copy; 2021</div>
      </footer>
    </motion.div>
  )
}
