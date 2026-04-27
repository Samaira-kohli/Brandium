import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logo0 from '../assets/logo0.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'
import logo9 from '../assets/logo9.png'
import logo10 from '../assets/logo10.png'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Work3Section = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]
    const mainRef = useRef(null)
    const paraRef = useRef()
    const headingRef = useRef(null)
    const wheelRef = useRef(null)
    const marqueeTween = useRef(null)

    useGSAP(() => {
        const splitPara = SplitText.create(paraRef.current, { type: 'lines' })
        const headingSplit = SplitText.create(headingRef.current, { type: 'lines, chars' })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: '-10% 80%',
            }
        })

        gsap.set(headingSplit.lines, {
            opacity: 0,
            y: 20,
            lineHeight: 0.7,
            rotateX: -80,
            scale: 0.8
        })

        tl.to(headingSplit.lines, {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
            color: '#D2FF00',
            lineHeight: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power1.out",
        }).to(headingSplit.chars, {
            color: 'black',
            stagger: 0.01,
            duration: 1
        }, '-=0.8')


        // ===== paragraph line reveal setup =====
        // < div class="line-mask" >
        // <div class="cover"></div>
        //  <div class="line">text...</div>
        splitPara.lines.forEach((line) => {
            const mask = document.createElement("div")
            mask.classList.add("line-mask")

            const cover = document.createElement("div")
            cover.classList.add("cover")

            line.parentNode.insertBefore(mask, line)
            mask.appendChild(cover)
            mask.appendChild(line)
        })

        gsap.to(".cover", {
            yPercent: 100,
            duration: 3,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: paraRef.current,
                start: "top 85%"
            }
        })

        // ===== marquee tween only once =====
        const totalWidth = wheelRef.current.scrollWidth / 2

        marqueeTween.current = gsap.to(wheelRef.current, {
            x: -totalWidth,
            duration: 25,
            ease: "none",
            repeat: -1
        })

        return () => {
            splitPara.revert()
            headingSplit.revert()
        }
    })

    const handleWheel = (e) => {
        if (!marqueeTween.current) return

        if (e.deltaY > 0) {
            gsap.to(marqueeTween.current, {
                timeScale: 1,
                duration: 0.5
            })
        } else {
            gsap.to(marqueeTween.current, {
                timeScale: -1,
                duration: 0.5
            })
        }
    }

    return (
        <section className='relative overflow-hidden h-[100vh]'>
            <div ref={mainRef} className='[perspective:900px] w-full flex flex-col justify-center items-center lg:gap-3 gap-8 py-25 px-3 lg:h-130 h-90'>
                <h5 ref={headingRef} className='text-center text-3xl md:text-5xl lg:text-7xl font-semibold lg:leading-none h-[50%] tracking-tighter md:w-[80%]'>
                    From ambitious brands to world-shaping leaders
                </h5>

                <p ref={paraRef} className='lg:w-[50%] md:w-2/3 leading-tight text-[1rem] lg:text-[1.4rem] -m-5 lg:m-0 text-center'>
                    Our partnerships are built on trust, collaboration and relentless craft. At Brandium we turn that trust into bold digital experiences, designed with precision, emotion, and a drive to make brands unforgettable.
                </p>
            </div>

            {/* logos */}
            <div className='overflow-hidden top-0 h-[80vh] absolute pt-30' onWheel={handleWheel}>
                <div ref={wheelRef} className='flex gap-20 w-max pt-50 md:pt-70'>
                    {
                        logos.map((img, i) => (
                            <img className='w-32 md:w-44 lg:w-52 h-auto object-contain' key={`logo${i}`} src={img} alt={`image${i}`} />
                        ))
                    }
                    {
                        logos.map((img, i) => (
                            <img className='w-32 md:w-44 lg:w-52 h-auto object-contain' key={`logo${i}`} src={img} alt={`image${i}`} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work3Section