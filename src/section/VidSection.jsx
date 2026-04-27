import React from 'react'
import vid from '../assets/vid.mp4'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VidSection = () => {
    const vidRef = useRef(null)
    const mainRef = useRef()
    useGSAP(() => {
        gsap.set(vidRef.current, {
            scale: 0.4,
            borderRadius: "40px"
        })

        gsap.to(vidRef.current, {
            scale: 1,
            borderRadius: "0px",
            ease: "none",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "300% bottom",
                scrub: 2,
                pin: true,
            }
        })
    }, { scope: mainRef })
    return (
        <section ref={mainRef} className='w-full h-[100vh] relative '>
            <div className='w-full h-screen flex justify-center items-center'>
                <video
                    ref={vidRef}
                    src={vid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-[92vw] h-[92vh] object-cover'
                />
            </div>
        </section>
    )
}

export default VidSection