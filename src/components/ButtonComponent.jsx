import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ButtonComponent = ({text, color}) => {
    const arrowRef = useRef(null);
    const lineRef = useRef(null);

    const { contextSafe } = useGSAP();

    const onMouseEnter = contextSafe(() => {
        const tl = gsap.timeline()
        tl.to(arrowRef.current, {
            x: 10,
            opacity: 1,
            duration: 0.2,
            ease: "power2.in"
        })
            .to(lineRef.current, {
                x: 200,
                opacity: 1,
                duration: 0.2,
                ease: "power2.in"
            },'-=0.2')
    })

    const onMouseLeave = contextSafe(() => {
        const tl = gsap.timeline();
        tl.to(arrowRef.current, {
            x: -18,
            opacity: 1,
            duration: 0.3,
            ease: "power2.in"
        }) .to(lineRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.2,
                ease: "power2.in"
            },'-=0.2')

    });

    return (
        <div className='w-fit overflow-hidden'>
            <button className=' overflow-hidden relative flex justify-center items-center w-50 cursor-pointer'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <div ref={arrowRef} className='flex items-center gap-2 -translate-x-5 '>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <div className='flex gap-10 items-center justify-between '>
                        <h3 style={{ color: color }} className={`flex-none font-medium`}>{text}</h3>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </button>
            <div
                ref={lineRef}
                className="w-full h-[1.5px] bg-black origin-left"
            />
        </div>
    );
};

export default ButtonComponent;