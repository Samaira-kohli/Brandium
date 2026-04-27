import React, { useRef, useEffect, useState } from 'react'
import SmileyGame from '../components/SmileyGame'
import ImageHover from '../components/ImageHover'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const DivsSection = () => {

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
                    <ImageHover img={image1} heading='Loop Earplugs' sub1='UX UI' sub2='Branding' sub3='Digital'/>
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
                    <ImageHover img={image2} heading='Co Office' sub1='Branding' sub2='WebDesign' sub3='Web Development'/>
                </div>
               
                {/* 4 */}
                <div className='divEffect' style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)' }}>
                     <ImageHover img={image3} heading='Metapsych' sub1='UX UI' sub2='WebDesign' sub3='Web Development'/>
                </div>

            </div>
        </section>
    )
}

export default DivsSection