import {useEffect, useState, useRef} from 'react'

import {motion} from 'framer-motion'

const images = [
    "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Van-Gogh.-Starry-Night-469x376.jpg", 
    "https://www.w3schools.com/tags/img_the_scream.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Park_Hill_Samarkanda.JPG/298px-Park_Hill_Samarkanda.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg/298px-The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg/298px-1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vista_Teatro_teresa_carre%C3%B1o.jpg/298px-Vista_Teatro_teresa_carre%C3%B1o.jpg",
]

const onDrag = (event, info) => {
  document.querySelector('.scatter_drag').classList.add('dragging')
};
const offDrag = (event, info) => {
  document.querySelector('.scatter_drag').classList.remove('dragging')
};

const Image = ({src, count}) => {
    const [xy, setXy] = useState({x: 0, y: 0})
    const imgRef = useRef();

    useEffect(() => {
        setXy({
            x: Math.max(0, Math.floor(Math.random() * window.innerWidth - imgRef.current.offsetWidth)), 
            y: Math.max(0, Math.floor(Math.random() * window.innerHeight - imgRef.current.offsetHeight))
        })

        imgRef.current.style.setProperty('transform', '0px 0px')
    }, [count]);

    return (
        <motion.img 
            ref={imgRef}
            drag dragMomentum={false}
            src={src} 
            key={src} 
            onDragStart={onDrag} onDragEnd={offDrag}
            style={{
                position: 'absolute',
                top: xy.y,
                left: xy.x
            }}
        />
    )
}

export default function LayoutScatter() {
    const [z, setZ] = useState(1)
    const [count, setCount] = useState(1)

    const onClick = (event) => {
        setZ(z + 1)
        event.target.style.zIndex = z;
    }

    return (
        <section className="subpage_section section_layout_scatter">

            <h1>SCATTER</h1>
            <button onClick={() => setCount(count + 1)}>🔄 RELOAD</button>

            <div className="scatter_drag">DRAG!!!</div>
            
            {images.map(image => (
                <div key={image} onMouseDown={onClick}>
                    <Image src={image} count={count}/>
                </div>
            ))}

        </section>
    )
}
