import React, { use, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import image3 from '../assets/image3.png'

const HelpSection = () => {
    const mainRef = useRef(null)
    const gridRef = useRef(null)
    const helpRef = useRef()
    const headingRef = useRef(null)
    useGSAP(() => {
        const helpSplit = SplitText.create(helpRef.current, { type: 'words' })
        const headingSplit = SplitText.create(headingRef.current, { type: 'lines' })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                // scrub:1,
                start: '-10% 80%',
                // markers:true
                // end: '80% 80%'
            }
        })
        gsap.set(headingSplit.lines, { opacity: 0, y: -20, color: '#D4FF00', lineHeight: 0.7, })
        tl.from('.icon', {
            duration: 0.5,
            y: 25,
            stagger: 0.1
        })
            .from(helpSplit.words, {
                duration: 0.5,
                y: 25,
                stagger: 0.1
            })
        tl.to(headingSplit.lines, {
            opacity: 1,
            y: 0,
            lineHeight: 1.2,
            duration: 1.3,
            stagger: 0.3,
            ease: "power1.out",
            color: '#000000'
        })
  

    })
    return (
        <section className='h-fit w-full' >
            <div ref={mainRef} className='px-[2%]'>
                <div className='overflow-hidden '><h4 ref={helpRef}> <FontAwesomeIcon icon={faStarOfLife} size='xs' className='icon' /> How we help</h4></div>
                <div className='md:h-60 h-[7rem]'><h5 ref={headingRef} className=' lg:text-6xl md:w-8/15 text-3xl font-semibold leading-tight tracking-tight'>Everything your brand needs to launch, grow, and thrive</h5></div>
            </div>

            <div ref={gridRef} className="flex flex-col lg:flex-row gap-12 md:p-8 p-3 justify-between">

                <div className="w-full lg:w-93 flex-shrink-0">
                    <img
                        src={image3}
                        alt="Service Preview"
                        className="w-full h-auto rounded-xl object-cover"
                    />
                </div>
 
                <div  className="grid grid-cols-2 xl:grid-cols-4 md:gap-8 gap-4 flex-grow">

                    <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Branding & Identity</h5>
                        <div className="flex flex-col space-y-1 text-sm text-gray-500">
                            <span>Brand strategy</span>
                            <span>Brand positioning</span>
                            <span>Visual identity design</span>
                            <span>Logo design</span>
                            <span>Naming & verbal identity</span>
                            <span>Brand guidelines</span>
                            <span>Brand architecture</span>
                            <span>Print & editorial design</span>
                            <span>Packaging design</span>
                            <span>Icon & illustration design</span>
                            <span>Graphic design</span>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Webdesign & Development</h5>
                        <div className="flex flex-col space-y-1 text-sm text-gray-500">
                            <span>Website design</span>
                            <span>UI/UX design</span>
                            <span>Webflow development</span>
                            <span>WordPress development</span>
                            <span>Custom front-end development</span>
                            <span>Back-end development</span>
                            <span>Prototyping & wireframing</span>
                            <span>Landing page design</span>
                            <span>Interactive web experiences</span>
                            <span>E-commerce</span>
                            <span>Shopify</span>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Motion & 3D</h5>
                        <div className="flex flex-col space-y-1 text-sm text-gray-500">
                            <span>Motion graphics</span>
                            <span>3D design</span>
                            <span>Web animations</span>
                            <span>Scroll-based interactions</span>
                            <span>Illustration & visual storytelling</span>
                            <span>Interactive prototyping</span>
                            <span>Video & animation direction</span>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Campaigns & Content</h5>
                        <div className="flex flex-col space-y-1 text-sm text-gray-500">
                            <span>Copywriting & messaging</span>
                            <span>Brand storytelling</span>
                            <span>Launch campaigns</span>
                            <span>Website & landing page copy</span>
                            <span>Email & newsletter copy</span>
                            <span>Tone of voice development</span>
                            <span>Social media management</span>
                            <span>Google Ads & social advertising</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HelpSection