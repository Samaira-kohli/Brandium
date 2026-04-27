import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import React, { use, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'


const ImpactSection = () => {
    const mainRef = useRef(null)
    const helpRef = useRef()
    const headingRef = useRef(null)
    const iconRef = useRef()

    useGSAP(() => {
        const helpSplit = SplitText.create(helpRef.current, { type: 'words' })
        const headingSplit = SplitText.create(headingRef.current, { type: 'lines' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                // scrub:1,
                start: '-10% 80%',
                // markers: true
                // end: '80% 80%'
            }
        })
        gsap.set(headingSplit.lines, { opacity: 0, y: -20, color: '#D4FF00', lineHeight: 0.7, })
        tl.from(iconRef.current, {
            duration: 0.5,
            y: 25,
        })
            .from(helpSplit.words, {
                duration: 0.5,
                y: 25,
                stagger: 0.1
            }, '-=0.4')
        tl.to(headingSplit.lines, {
            opacity: 1,
            y: 0,
            lineHeight: 1.2,
            duration: 1.3,
            stagger: 0.3,
            ease: "power1.out",
            color: '#000000'
        }, '-=0.1')

        return () => {
            helpSplit.revert()
            headingSplit.revert()
        }
    })
    return (
        <section>
            <div ref={mainRef} className='px-[2%]  md:mb-22'>
                <div className='overflow-hidden flex gap-1'>
                    <span ref={iconRef} className=' overflow-hidden'>
                        <FontAwesomeIcon icon={faStarOfLife} size='xs' />
                    </span>
                    <h4 ref={helpRef}>Impact made visible</h4>
                </div>
                <div className=' flex justify-between items-center md:flex-row flex-col md:gap-0 gap-3'>
                    <h5 ref={headingRef} className='md:h-40 h-18  lg:text-6xl text-3xl font-semibold leading-tight tracking-tight w-full md:w-[45%]'>From bold ideas to results that truly matter</h5>
                    <h5 className='md:w-[35%]  text-black/50 text-sm sm:text-base leading-snug'>We build brands that speak with clarity and confidence. Every identity and digital experience we create is shaped with strategic intent and crafted to feel unforgettable. As a branding agency and design agency we bring together brand identity design, creative direction, and future focused web experiences to turn ambition into real market impact.</h5>
                </div>
            </div>
        </section>
    )
}

export default ImpactSection