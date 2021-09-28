import {useEffect, useRef, useState} from 'react'

const _baseSpeed = 5;

class _DVD {
    constructor(el, x, y) {
        this.dot       = el;
        this.body      = document.querySelector('body')
        this.baseSpeed = _baseSpeed;
        this.velocityX = -1;
        this.velocityY = -1;
        this.bodyBcr   = this.body.getBoundingClientRect();
        this.dotBcr    = this.dot.getBoundingClientRect();
        this.posX      = x;
        this.posY      = y;
        this.paused    = false;

        this.init();
    }

    init() {
        window.addEventListener('resize', this.onResize.bind(this));
        this.dot.addEventListener('mouseenter', () => this.slow());
        this.dot.addEventListener('mouseleave', () => this.fast());
        this.render();
    }

    slow() {
        this.baseSpeed = 1;
    }
    
    fast() {
        this.baseSpeed = _baseSpeed;
    }

    pause() {
        this.paused = true;
        this.dot.style.opacity = 0
    }

    play() {
        this.paused = false;
        this.dot.style.opacity = 1
    }

    getRandomColor() {
        var colours = [
            '#FFFFFF',
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
        ]
        return colours[Math.floor(Math.random() * colours.length)];
    }

    setRandomColor() {
        this.dot.style.background = this.getRandomColor();
    }
    
    checkBounds() {
        if (this.posX >= window.innerWidth - this.dotBcr.width || this.posX <= 0) {
            this.velocityX = this.velocityX * -1;
            this.setRandomColor();
        }

        if (this.posY >= window.innerHeight - this.dotBcr.height || this.posY <= 0) {            
            this.velocityY = this.velocityY * -1;
            this.setRandomColor();
        }
    }

    onResize() {
        this.bodyBcr = this.body.getBoundingClientRect();
        this.dotBcr = this.dot.getBoundingClientRect();

        if (this.dotBcr.left + this.dotBcr.width >= window.innerWidth || this.dotBcr.top + this.dotBcr.height >= window.innerHeight) {
            this.posX = window.innerWidth - this.dotBcr.width - 40;
            this.posY = window.innerHeight - this.dotBcr.height - 40;
        }

        this.render();
    }

    render() {
        if (!this.paused) {
            this.posX = this.posX + (this.baseSpeed * this.velocityX);
            this.posY = this.posY + (this.baseSpeed * this.velocityY);
            
            this.movementX = this.posX
            this.movementY = this.posY

            this.dot.style.transform = `translate(${this.movementX}px, ${this.movementY}px)`;
        }

        this.checkBounds();

        requestAnimationFrame(() => this.render());
    }
}

function Ball({text, x, y}) {

    const _ref = useRef();
    
    useEffect(() => {
        const dvd = new _DVD(_ref.current, x-20, y-20)
    }, [])


    return (
        <div className="dvd-ball" ref={_ref}>{text}</div>
    )
}

export default function DVD() {

    const [balls, setBalls] = useState([])

    useEffect(() => {
        const dvd_ = new _DVD(document.querySelector('.dvd'), window.innerWidth - 180, window.innerHeight - 190)
    }, [])


    const createBall = (e) => {
        setBalls(oldBalls => [
            ...oldBalls,
            {
                i: balls.length + 1,
                text: '💿',
                x: e.clientX,
                y: e.clientY
            }
        ])
    }

    return (
        <div className="dvd-page" onClick={createBall}>
            
            <div className="dvd">dvd</div>

            {balls.map(ball => <Ball key={ball.i} text={ball.text} x={ball.x} y={ball.y}/>)}

        </div>
    )
}
