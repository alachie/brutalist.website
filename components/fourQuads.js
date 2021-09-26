import {useEffect, useState, useRef} from 'react'

export default function FourQuads() {
    const ref = useRef(null)

    function handleClick(e) {
        if(e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
            ref.current.dataset.current = '';
            return
        }
        
        ref.current.querySelectorAll('div').forEach(el => {
            el.classList.remove('active')
        })

        e.currentTarget.classList.add('active')
        ref.current.dataset.current = e.currentTarget.innerHTML;
    }

    return (
        <section className="subpage_section section_layout_quads" ref={ref}>

            <div onClick={handleClick}>1</div>
            <div onClick={handleClick}>2</div>
            <div onClick={handleClick}>3</div>
            <div onClick={handleClick}>4</div>

        </section>
    )
}