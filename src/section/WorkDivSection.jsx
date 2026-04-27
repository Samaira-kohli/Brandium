import React, { useRef, useEffect, useState } from 'react'
import SmileyGame from '../components/SmileyGame'
import ImageHover from '../components/ImageHover'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const WorkDivSection = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.divEffect')

    cards.forEach((card) => {
        const img = card.querySelector('.imgZoom')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            }
        })

        tl.from(card, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            duration: 2.5,
            ease: 'power4.out'
        })

        .from(img, {
            scale: 1.35,
            duration: 2.2,
            ease: 'power3.out'
        }, 0)
    })
})
    return (
        <section>
            <div className=' grid lg:grid-cols-2 lg:grid-rows-2 gap-10 md:mx-12 mainDiv overflow-hidden'>
     
                {/* 1 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                    <ImageHover img='src/assets/image4.png' heading='Loop Earplugs' sub1='UX UI' sub2='Branding' sub3='Digital'/>
                </div>

                {/* 2 */}
                <div className='md:h-[96vh] divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                    <SmileyGame />
                    <div className='flex md:justify-between items-center h-[7%] md:gap-0 gap-3'>
                        <h5 className='md:text-2xl'>GoodNews</h5>
                        <div className='flex text-xs text-black/50 flex-row-reverse gap-1'>
                            <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>UX UI</p>
                            <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>Branding</p>
                            <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>WebDesign</p>
                        </div>
                    </div>
                </div>
                
                {/* 3 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                    <ImageHover img='src/assets/image5.png' heading='Co Office' sub1='Branding' sub2='WebDesign' sub3='Web Development'/>
                </div>
               
                {/* 4 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                     <ImageHover img='src/assets/image3.png' heading='Metapsych' sub1='UX UI' sub2='WebDesign' sub3='Web Development'/>
                </div>
               
                {/* 5 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                     <ImageHover img='src/assets/image6.png' heading='Metapsych' sub1='UX UI' sub2='WebDesign' sub3='Web Development'/>
                </div>

                 {/* 6 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                     <ImageHover img='src/assets/image7.png' heading='Metapsych' sub1='UX UI' sub2='WebDesign' sub3='Web Development'/>
                </div>

                {/* 7 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                    <ImageHover img='src/assets/image8.png' heading='Co Office' sub1='Branding' sub2='WebDesign' sub3='Web Development'/>
                </div>
               
                {/* 8 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                     <ImageHover img='src/assets/image9.png' heading='Metapsych' sub1='UX UI' sub2='WebDesign' sub3='Web Development'/>
                </div>

            </div>
        </section>
    )
}

export default WorkDivSection