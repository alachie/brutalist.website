import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import DrawBg from '../components/drawBg';
import classNames from 'classnames';

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

export default function Home() {
  const List = useRef();

  const [showAbout, setAbout] = useState(false)
  const [showQuestion, setQuestion] = useState(false)
  const [reload, setReload] = useState(0)
  const [fontSize, setFontSize] = useState(16)
  const [bgColour, setBgColour] = useState('lightgrey')
  const [font, setFont] = useState('sans')

  const [displayMode, setDisplayMode] = useState('grid')

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
    }
  }, [showAbout, showQuestion, reload, displayMode])

  useEffect(() => {
    document.documentElement.style.fontSize = fontSize + 'px';
  }, [fontSize])

  useEffect(() => {
    document.documentElement.style.setProperty('--background', bgColour);
  }, [bgColour])

  useEffect(() => {
    switch (font) {
      case 'sans':
        document.documentElement.style.fontFamily = 'helvetica';
        break;

      case 'serif':
        document.documentElement.style.fontFamily = 'times new roman';
        break;

      case 'blackletter':
        document.documentElement.style.fontFamily = 'Respira Black';
        break;

      case 'humour':
        document.documentElement.style.fontFamily = 'comic sans ms';
        break;
    
      default:
        break;
    }
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

      <ol ref={List} className={classNames({"display_list": (displayMode === "list")})}>
        <li><Link href="/layout">Layout</Link></li>
        <li><Link href="/typography">Typography</Link></li>
        <li><Link href="/interaction">Interaction</Link></li>
        <li><Link href="/colours">Colours</Link></li>
        <li><a href="#" onClick={() => {setAbout(true);setQuestion(true)}}>About</a></li>
      </ol>

      

      {showQuestion && <motion.div className="about-box" drag dragMomentum={false}>
        <h2>🔬 Research Question</h2>
        <p>Investigating the aesthetic signifiers of brutalist web design through the creation of an educational website/interactive experience, as practice-based research.</p>
        <button onClick={() => {setQuestion(false)}}>&times;</button>
      </motion.div>}

      {showAbout && <motion.div className="about-box" drag dragMomentum={false}>
        <h2>🤔 About</h2>
        <p>Feugiat massa amet mauris condimentum eget, sociis conubia ridiculus morbi.</p>
        <button onClick={() => {setAbout(false)}}>&times;</button>
      </motion.div>}

      <DrawBg/>
      <footer>
        <div>
          <button onClick={() => {setReload(reload + 1)}}>♻️ Reload</button>
          <button onClick={() => {setDisplayMode('grid')}}>Scatter</button>
          <button onClick={() => {setDisplayMode('list')}}>List</button>
          <input type="range" min="16" max="30" value={fontSize} onChange={onFontChange} step="0.1" />
          <input type="color" value="#ff0000" value={bgColour} onChange={onBgChange}/>
          <select name="font" onChange={handleFontSelect}>
            <option value="sans">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="display">display</option>
            <option value="blackletter">blackletter</option>
            <option value="humour">humour</option>
          </select>
        </div>
        <div>&copy; 2021</div>
      </footer>
    </motion.div>
  )
}
