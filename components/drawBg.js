import { useEffect, useRef } from "react";

export default function DrawBg() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        function draw(e) {
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);
        }

        document.addEventListener("mousemove", draw)

    }, [])
    
    return (
        <canvas className="drawbg-canvas" ref={canvasRef}/>
    )
}