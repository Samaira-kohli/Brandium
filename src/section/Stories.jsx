import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
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

const Stories = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]
    const sectionRef = useRef(null)
    const helpRef = useRef(null)
    const headingRef = useRef(null)
    const iconRef = useRef(null)
    const wheelRef = useRef(null)
    const marqueeTween = useRef(null)

    useGSAP(() => {
        let helpSplit
        let headingSplit

        const createSplitAnim = () => {
            helpSplit && helpSplit.revert()
            headingSplit && headingSplit.revert()

            helpSplit = new SplitText(helpRef.current, {
                type: 'words'
            })

            headingSplit = new SplitText(headingRef.current, {
                type: 'lines',
                linesClass: 'split-line'
            })

            gsap.set(headingSplit.lines, {
                opacity: 0,
                yPercent: 100,
                color: '#D4FF00'
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                }
            })

            tl.from(iconRef.current, {
                duration: 0.5,
                y: 25,
                opacity: 0
            })
                .from(helpSplit.words, {
                    duration: 0.5,
                    y: 25,
                    opacity: 0,
                    stagger: 0.08
                }, '-=0.35')
                .to(headingSplit.lines, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1.1,
                    stagger: 0.15,
                    ease: "power3.out",
                    color: '#000000',
                    overwrite: true
                }, '-=0.1')
        }

        setTimeout(() => {
            createSplitAnim()
            ScrollTrigger.refresh()
        }, 100)

        // ===== marquee tween only once =====
        const totalWidth = wheelRef.current.scrollWidth / 2

        marqueeTween.current = gsap.to(wheelRef.current, {
            x: -totalWidth,
            duration: 25,
            ease: "none",
            repeat: -1
        })
    }, { scope: sectionRef })

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
        <section ref={sectionRef} className='relative min-h-[83vh] overflow-hidden py-20'>

            <div className='px-[4%]'>
                <div className='overflow-hidden flex justify-center items-center gap-2'>
                    <FontAwesomeIcon icon={faStarOfLife} size='xs' ref={iconRef} />
                    <h4 ref={helpRef}>Family and Brands</h4>
                </div>

                <div className='flex justify-center '>
                    <h5
                        ref={headingRef}
                        className='text-center text-3xl sm:text-4xl lg:text-6xl md:w-1/2 w-full font-semibold leading-[1.08] tracking-tight'
                    >
                        Stories worth telling, brands worth building
                    </h5>
                </div>
            </div>

            {/* logos */}
            <div className='overflow-hidden top-0 h-[80vh] absolute' onWheel={handleWheel}>
                <div ref={wheelRef} className='flex gap-20 w-max pt-50 md:pt-70'>
                    {
                        logos.map((img,i)=>(
                            <img className='w-32 md:w-44 lg:w-52 h-auto object-contain' key={`logo${i}`} src={img} alt={`image${i}`} />
                        ))
                    }
                    {
                        logos.map((img,i)=>(
                            <img className='w-32 md:w-44 lg:w-52 h-auto object-contain' key={`logo${i}`} src={img} alt={`image${i}`} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Stories