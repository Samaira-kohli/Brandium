import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const HomeSection = () => {
  const mainRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)

  useGSAP(() => {
    const headingSplit = SplitText.create(headingRef.current, { type: 'lines' })
    const paraSplit = SplitText.create(paraRef.current, { type: 'lines' })

    gsap.set(headingSplit.lines, {
      opacity: 0,
      y: 30,
      rotateX: -80,
      scale: 0.9
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 80%',
      }
    })

    tl.to(headingSplit.lines, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
    .from(paraSplit.lines, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5
    }, '-=0.4')

    return () => {
      headingSplit.revert()
      paraSplit.revert()
    }
  })

  return (
    <section className='px-4 sm:px-6 md:px-10 lg:px-[2.2rem]  py-20 overflow-hidden'>

      <div
        ref={mainRef}
        className='w-full md:mt-20  lg:w-[60%] [perspective:900px]' 
      >
        <h2
          ref={headingRef}
          className='
            text-[2rem]
            leading-[0.95]
            sm:text-[3rem]
            md:text-[4.2rem]
            lg:text-[4.7rem]
            font-medium
            tracking-[-0.03em]
          '
        >
          We're a creative branding agency helping ambitious brands disrupt the expected
        </h2>
      </div>

      <div className='flex justify-end mt-5 md:mt-8'>
        <h5
          ref={paraRef}
          className='
            w-full
            md:w-[55%]
            lg:w-[35%]
            text-black/50
            text-sm
            sm:text-base
            leading-relaxed
          '
        >
          At Brandium® we build brand identities, design striking websites, and
          craft digital experiences that fuel growth. As a branding & web design
          agency we turn your business into a distinctive digital powerhouse.
        </h5>
      </div>

    </section>
  )
}

export default HomeSection