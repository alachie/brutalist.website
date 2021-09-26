import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'

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

function Modal({children}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    if (isBrowser) {
      return ReactDOM.createPortal(
          children, 
          document.getElementById("modal-root")
      );
    } else {
      return null;
    }    
  
}

function VariableType() {
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const [weight, setWeight] = useState(0)
    const [slant, setSlant] = useState(0)

    useEffect(() => {
        document.addEventListener("mousemove", function(e) {
            setMouse({
                x: e.clientX, 
                y: e.clientY
            })
        })
    }, [])
    useEffect(() => {
        setWeight(mouse.x / window.innerWidth * 1000)
        setSlant(-mouse.y / window.innerHeight * 15)
    }, [mouse])
    
    return (
        <section className="subpage_section section_type_variable">
            <div className="type">
                <div style={{'--weight': weight, '--slnt': slant}}>Variable</div>
                <div style={{'--weight': 1000 - weight, '--slnt': slant}}>Fonts!</div>
            </div>
            <Modal>
              <div className="mouse-pos" style={{ 'top': mouse.y, 'left': mouse.x}}>x: {mouse.x}, y: {mouse.y}</div>
            </Modal>
            <div style={{fontFamily: "monospace"}}>
              <p>Typeface: Recursive</p>
              <p>Slant: {slant},<br/> Weight: {weight}</p>
            </div>
        </section>
    )
}

export default function Type() {
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper"
    >
        <Head>
            <title>Typography - 🌐 Brutalist.Website</title>
            <link href="https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap" rel="stylesheet"/>

        </Head>
        <h1 className="page-title" style={{fontSize: '14.3vw'}}>Typography</h1>
        <Link href="/">&larr; 🏠 home</Link>
        
        <div>
            <section className="subpage_section section_type_stretched">
                <div>STRETCHED</div>
                <div>TYPE</div>
            </section>

            <VariableType/>

            <section>

              <svg  width="100%" height="auto" viewBox="0 0 1070 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.844 62.212H5.352C5.22 61.288 5.22 60.364 5.484 59.308C5.88 57.856 6.804 56.404 8.256 55.612C8.916 55.084 9.708 54.82 10.5 54.688C11.292 54.556 12.084 54.556 12.876 54.556C14.196 54.556 15.648 54.556 16.968 54.556C16.968 57.592 16.968 60.628 16.968 63.532C16.968 67.096 16.968 70.528 16.572 73.96C16.176 77.392 15.12 80.956 13.008 83.596C11.952 85.18 10.5 86.368 8.916 87.292L10.104 90.46C17.892 88.48 25.416 84.256 30.036 77.524C31.488 75.544 32.676 73.168 33.204 70.66C33.864 68.152 33.996 65.512 33.996 62.872V49.408V30.136C33.996 28.288 33.996 26.308 34.788 24.592C35.052 23.8 35.58 23.008 36.24 22.216C36.9 21.556 37.56 21.028 38.352 20.368L57.888 5.18799L58.68 2.15199C57.096 3.076 55.512 3.86799 53.796 4.39599C51.288 5.18799 48.516 5.452 45.876 5.452C42.972 5.32 40.068 4.65999 37.164 3.99999C34.26 3.472 31.356 2.81199 28.452 2.944C24.624 2.944 20.928 4.132 17.76 5.84799C12.348 9.016 8.256 13.9 6.012 19.312H9.048C9.576 17.992 10.368 16.672 11.688 15.616C12.876 14.692 14.46 14.032 16.044 13.768C18.684 13.24 21.588 13.768 24.228 14.428C26.868 15.22 29.508 16.144 32.148 16.408C33.468 16.672 34.788 16.672 36.108 16.54C32.28 18.916 28.584 21.292 24.888 23.668C22.644 25.12 20.268 26.572 18.816 28.816C18.024 29.872 17.496 31.06 17.232 32.38C16.968 33.7 16.968 35.02 16.968 36.34V39.772C14.064 40.3 11.16 40.696 8.52 41.884C6.672 42.808 5.088 43.996 3.768 45.712C2.448 47.296 1.656 49.144 1.128 51.124C0.336 54.82 0.996 58.912 2.844 62.212ZM59.208 103.528L103.296 80.692V47.56C100.26 45.184 96.96 42.94 93.528 40.96C90.888 39.64 88.116 38.32 85.212 37.264L101.712 25.78L80.328 0.699995C72.408 3.33999 64.752 7.3 57.888 12.052C51.288 16.936 45.216 22.612 40.2 29.08V70.264C40.2 71.848 40.2 73.3 39.936 74.752C39.672 76.204 39.276 77.656 38.616 78.976C38.088 80.296 37.428 81.484 36.636 82.54C22.644 85.576 10.104 94.816 2.976 107.224H6.276C9.048 104.452 12.48 102.208 16.176 100.492C20.268 98.776 24.624 97.588 29.112 97.192C39.54 96.4 49.968 98.776 59.208 103.528ZM66.732 86.368V82.408L86.004 72.64V87.16L75.18 92.176C72.672 89.932 69.768 87.952 66.732 86.368ZM66.732 46.636C70.692 47.956 74.52 49.672 78.084 51.652C80.196 52.84 82.176 54.16 84.156 55.48L66.732 64.324V46.636ZM63.036 84.652C62.508 84.52 61.848 84.256 61.32 83.992C55.644 82.012 49.44 81.22 43.368 81.616C44.82 80.428 46.272 79.108 47.592 77.788C50.628 75.148 53.664 72.244 55.512 68.68C56.436 66.832 57.096 64.852 57.492 62.872C57.756 60.892 57.756 58.78 57.756 56.8V49.408V22.216C58.02 19.972 58.812 17.728 60 15.88C60.792 14.692 61.848 13.636 63.036 12.712C63.036 36.736 63.036 60.628 63.036 84.652ZM66.732 68.548L86.004 58.78V68.416L66.732 78.184V68.548ZM66.732 11.92L84.288 32.512L66.732 45.712C66.732 34.36 66.732 23.14 66.732 11.92ZM116.977 7.99609H136.828V85.9199H183.879V103H116.977V7.99609ZM223.646 67.0996H247.752L235.893 29.7168L223.646 67.0996ZM224.871 7.99609H247.301L280.945 103H259.418L253.295 83.4707H218.297L211.723 103H190.969L224.871 7.99609ZM288.938 56.2715C288.938 39.6855 293.385 26.9023 302.279 17.9219C310.014 10.1016 319.854 6.19141 331.799 6.19141C347.783 6.19141 359.471 11.4336 366.861 21.918C370.943 27.8047 373.135 33.7129 373.436 39.6426H353.584C352.295 35.0879 350.641 31.6504 348.621 29.3301C345.012 25.2051 339.662 23.1426 332.572 23.1426C325.354 23.1426 319.66 26.0645 315.492 31.9082C311.324 37.709 309.24 45.9375 309.24 56.5938C309.24 67.25 311.432 75.2422 315.814 80.5703C320.24 85.8555 325.848 88.498 332.637 88.498C339.598 88.498 344.904 86.2207 348.557 81.666C350.576 79.2168 352.252 75.543 353.584 70.6445H373.242C371.523 81 367.119 89.4219 360.029 95.9102C352.982 102.398 343.938 105.643 332.895 105.643C319.23 105.643 308.488 101.26 300.668 92.4941C292.848 83.6855 288.938 71.6113 288.938 56.2715ZM388.775 7.99609H408.305V47.1191L444.979 7.99609H470.631L431.701 47.1191L472.629 103H447.105L417.779 61.4922L408.305 71.2246V103H388.775V7.99609ZM555.054 53.632C554.262 57.46 554.79 61.42 556.374 64.852H558.882C558.618 63.664 558.75 62.344 559.278 61.156C559.806 59.836 560.862 58.648 562.05 57.988C562.71 57.724 563.502 57.46 564.162 57.328C564.822 57.196 565.614 57.196 566.274 57.196C567.594 57.196 568.914 57.196 570.234 57.196C570.234 59.968 570.234 62.74 570.234 65.512C570.234 68.812 570.366 71.98 570.102 75.28C569.97 78.58 569.442 81.88 567.858 84.784C566.538 87.16 564.426 89.14 562.05 90.328H566.406C570.63 89.668 574.722 87.952 578.022 85.312C581.454 82.672 584.094 78.976 585.546 74.884C587.13 70.792 587.262 66.436 587.262 62.08V51.916V33.172C587.262 28.42 587.658 23.668 589.638 19.18C590.43 17.332 591.618 15.616 593.07 14.164C593.73 13.636 594.522 12.976 595.182 12.448C596.37 11.656 597.558 10.864 598.614 9.93999C600.858 8.09199 603.102 5.98 605.082 3.736L605.214 0.171994C603.762 1.624 602.046 2.67999 600.198 3.33999C597.558 4.39599 594.654 4.65999 591.882 4.39599C589.242 4.132 586.602 3.20799 583.962 2.548C581.322 1.756 578.682 1.228 576.042 1.228C573.798 1.35999 571.686 1.888 569.574 2.67999C567.594 3.604 565.878 4.792 564.162 6.24399C559.674 10.072 556.374 14.956 553.998 20.236H557.034C557.826 18.388 559.278 16.936 561.126 16.012C562.71 15.22 564.426 14.956 566.274 14.956C569.046 15.088 571.818 15.748 574.59 16.276C577.362 16.804 580.134 17.068 582.906 16.804C584.094 16.804 585.282 16.54 586.47 16.276C585.414 17.068 584.49 17.728 583.434 18.388C581.718 19.576 579.87 20.632 578.154 21.82C576.438 23.14 574.722 24.46 573.534 26.176C572.214 27.892 571.29 29.74 570.762 31.852C570.234 33.964 570.234 36.076 570.234 38.188V42.676C567.594 42.676 564.822 42.94 562.446 43.996C560.466 44.788 558.75 46.108 557.43 47.824C556.242 49.54 555.45 51.52 555.054 53.632ZM595.71 83.068C599.01 80.56 602.178 77.92 604.818 74.884C606.666 72.904 608.118 70.528 609.042 67.888C609.834 65.38 609.966 62.608 609.966 59.836V37V26.704C609.966 24.46 610.098 22.084 610.362 19.708C610.626 17.464 611.286 15.088 612.474 13.108C613.53 10.996 615.114 9.148 616.962 7.828C618.81 6.37599 620.922 5.32 623.166 4.264L625.938 2.944V1.49199L623.958 1.888C617.358 3.20799 610.758 5.05599 605.214 8.88399C601.782 11.26 598.746 14.428 596.766 17.992C594.786 21.424 593.862 25.252 593.334 29.212C592.938 33.04 592.938 37 592.938 40.828V53.104V60.496C592.938 63.928 593.07 67.492 592.806 70.924C592.542 74.356 591.882 77.92 590.298 80.956C589.506 82.276 588.714 83.464 587.658 84.652C582.774 85.84 578.154 87.952 573.93 90.724C567.858 94.684 562.842 100.096 559.278 106.432V108.94C568.386 102.208 579.738 98.248 591.09 97.852C601.65 97.588 612.21 100.228 621.318 105.508L640.722 91.12L638.61 88.084L634.254 91.252C629.238 88.744 623.826 86.632 618.414 85.18C611.022 83.2 603.366 82.408 595.71 83.068ZM722.449 24.8184H672.176V44.9922H718.324V61.4922H672.176V85.9199H724.77V103H652.775V7.99609H722.449V24.8184ZM809.268 7.99609V24.8184H780.844V103H760.863V24.8184H732.311V7.99609H809.268ZM889.963 7.99609V24.8184H861.539V103H841.559V24.8184H813.006V7.99609H889.963ZM971.883 24.8184H921.609V44.9922H967.758V61.4922H921.609V85.9199H974.203V103H902.209V7.99609H971.883V24.8184ZM1009.52 24.4961V50.0195H1032.02C1036.49 50.0195 1039.84 49.5039 1042.07 48.4727C1046.03 46.668 1048 43.1016 1048 37.7734C1048 32.0156 1046.09 28.1484 1042.27 26.1719C1040.12 25.0547 1036.89 24.4961 1032.6 24.4961H1009.52ZM1036.72 7.99609C1043.38 8.125 1048.5 8.94141 1052.06 10.4453C1055.67 11.9492 1058.72 14.1621 1061.21 17.084C1063.28 19.4902 1064.91 22.1543 1066.11 25.0762C1067.32 27.998 1067.92 31.3281 1067.92 35.0664C1067.92 39.5781 1066.78 44.0254 1064.5 48.4082C1062.22 52.748 1058.46 55.8203 1053.22 57.625C1057.61 59.3867 1060.7 61.9004 1062.5 65.166C1064.35 68.3887 1065.28 73.3301 1065.28 79.9902V86.3711C1065.28 90.7109 1065.45 93.6543 1065.79 95.2012C1066.31 97.6504 1067.51 99.4551 1069.4 100.615V103H1047.55C1046.95 100.895 1046.52 99.1973 1046.26 97.9082C1045.75 95.2441 1045.47 92.5156 1045.42 89.7227L1045.29 80.8926C1045.21 74.834 1044.09 70.7949 1041.94 68.7754C1039.84 66.7559 1035.86 65.7461 1030.02 65.7461H1009.52V103H990.123V7.99609H1036.72Z" fill="black"/>
              </svg>

              <p>Typeface: Chomsky</p>

            </section>

            <section className="section_type_blurred">

              <h1>BLURRED</h1>
              <h1>🥶</h1>

            </section>

            <section className="subpage_section">
                <h2>Brutalist Typefaces</h2>
                <ul>
                  <li>Times New Roman</li>
                  <li>Helvetica</li>
                  <li>Arial</li>
                  <li>GT America</li>
                  <li>Apoc</li>
                  <li>Bagnard</li>
                  <li>Droulers</li>
                  <li>Monarch</li>
                  <li>Panama</li>
                  <li>Self Modern</li>
                  <li>Space Mono</li>
                </ul>
            </section>
           
        </div>
    </motion.div>
  )
}