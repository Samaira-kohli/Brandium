import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {
    const mainRef = useRef(null)
    const paraRef = useRef()
    const headingRef = useRef(null)

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

        return () => {
            splitPara.revert()
            headingSplit.revert()
        }
    })
    return (
        <div>
            <div ref={mainRef} className='[perspective:900px] w-full flex flex-col justify-center items-center lg:gap-8 gap-8 py-25 px-3 lg:h-130 h-90'>
                <h5 ref={headingRef} className='text-center text-4xl md:text-6xl lg:text-8xl font-semibold h-[60%] tracking-tighter md:w-[80%] lg:w-[60%]'>
                    Brands that shift from visuals to experience
                </h5>

                <p ref={paraRef} className='lg:w-[55%] md:w-2/3 leading-tight text-[1rem] lg:text-[1.4rem] -m-5 lg:m-0 text-center'>
                    Discover how we transform your brand into an experience, blending
                    strategy and design to captivate and connect with your audience.
                </p>
            </div>
        </div>
    )
}

export default Services