import React, { useRef } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useGSAP } from '@gsap/react'
import ButtonComponent from './ButtonComponent'

gsap.registerPlugin(Draggable)

const CardSlider = () => {
    const containerRef = useRef(null)
    const sliderRef = useRef(null)
    const textRef = useRef()
    const textRef1 = useRef()
    const textRef3 = useRef()

    useGSAP(() => {
        const slider = sliderRef.current
        const container = containerRef.current

        const totalWidth = slider.scrollWidth / 2 // because content is duplicated
        gsap.to(slider, {
            x: `-=${totalWidth}`,  // move left continuously
            duration: 25,
            ease: "none",
            repeat: -1,
            overwrite: true,
        })

        gsap.to(textRef.current, {
            duration: 6,
            y: -200,
            ease: "steps(7)",
            repeat: -1,
        })

        gsap.to(textRef1.current, {
            duration: 6,
            y: -225,
            ease: "steps(7)",
            repeat: -1,
        })

        gsap.to(textRef3.current, {
            duration: 6,
            y: -200,
            ease: "steps(7)",
            repeat: -1,
        })
    }, [])



    return (
        <div ref={containerRef} className="overflow-hidden w-full py-10">
            <div ref={sliderRef} className="flex gap-5">
                {/* div1 */}
                <div className="flex-none h-[500px] w-[362px] bg-amber-900 rounded-2xl bg-[url('src/assets/slider1.png')] bg-cover"></div>

                {/* div2 */}
                <div className="flex-none h-[350px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between">
                    <h3>From canals to continents.<br /> We shape brands and build businesses that are ready to scale.</h3>
                    <ButtonComponent text='Work with us' />
                </div>

                {/* div3 */}
                <div className="flex-none h-[350px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between">
                    <h3>Making brands iconic<br />and websites unforgettable since</h3>
                    <p className='text-9xl text-center'>2014</p>
                </div>

                {/* div4 */}
                <div className="flex-none h-[500px] w-[362px] bg-[#D2FF00] rounded-2xl p-6 flex flex-col gap-8 items-center">
                    <h3>Designed in India, scaled globally</h3>
                    <img src='src/assets/globe.png' />
                </div>

                {/* div5 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6">
                    <h3>85+ brands successfully launched since 2014</h3>
                </div>

                {/* div5 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#000000] rounded-2xl p-6">
                    <p className='text-white text-[22px]'>+346% contacts requests</p>
                    <p className='text-white/60 text-[22px]'>after bold brand identity</p>
                </div>

                {/* div6 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6">
                    <h3>Multi-disciplinary team blending branding, design and tech seamlessly</h3>
                </div>

                {/* div7 */}
                <div className="flex-none h-[500px] w-[362px] p-6 rounded-2xl bg-[url('src/assets/slider2.png')] bg-cover">
                    <div className='h-7 overflow-hidden '>
                        <div ref={textRef} className=' flex flex-col opacity-60'>
                            <h4 className='border-1 border-amber-500/0'>Legal</h4>
                            <h4 className='border-1 border-amber-500/0'>Travel</h4>
                            <h4 className='border-1 border-amber-500/0'>AI</h4>
                            <h4 className='border-1 border-amber-500/0'>Eductaion</h4>
                            <h4 className='border-1 border-amber-500/0'>Health</h4>
                            <h4 className='border-1 border-amber-500/0'>Finance</h4>
                            <h4 className='border-1 border-amber-500/0'>Ecommerce</h4>
                            <h4 className='border-1 border-amber-500/0'>Legal</h4>
                            <h4 className='border-1 border-amber-500/0'>Travel</h4>
                        </div>
                    </div>
                    <div className='h-9 overflow-hidden'>
                        <div ref={textRef1} className=' flex flex-col'>
                            <h3>Travel</h3>
                            <h3>AI</h3>
                            <h3>Eductaion</h3>
                            <h3>Health</h3>
                            <h3>Finance</h3>
                            <h3>Ecommerce</h3>
                            <h3>Legal</h3>
                        </div>
                    </div>
                    <div className='h-7 overflow-hidden'>
                        <div ref={textRef3} className=' flex flex-col opacity-60'>
                            <h4 className='border-1 border-fuchsia-400/0'>AI</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Eductaion</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Health</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Finance</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Ecommerce</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Legal</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Travel</h4>
                        </div>
                    </div>

                </div>

                <div className='bg-amber-800 opacity-0 h-100 -ml-1' >.</div>




                {/* div1 */}
                <div className="flex-none h-[500px] w-[362px] bg-amber-900 rounded-2xl bg-[url('src/assets/slider1.png')] bg-cover"></div>

                {/* div2 */}
                <div className="flex-none h-[350px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between">
                    <h3>From canals to continents.<br /> We shape brands and build businesses that are ready to scale.</h3>
                    <ButtonComponent text='Work with us' />
                </div>

                {/* div3 */}
                <div className="flex-none h-[350px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between">
                    <h3>Making brands iconic<br />and websites unforgettable since</h3>
                    <p className='text-9xl text-center'>2014</p>
                </div>

                {/* div4 */}
                <div className="flex-none h-[500px] w-[362px] bg-[#D2FF00] rounded-2xl p-6 flex flex-col gap-8 items-center">
                    <h3>Designed in India, scaled globally</h3>
                    <img src='src/assets/globe.png' />
                </div>

                {/* div5 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6">
                    <h3>85+ brands successfully launched since 2014</h3>
                </div>

                {/* div5 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#000000] rounded-2xl p-6">
                    <p className='text-white text-[22px]'>+346% contacts requests</p>
                    <p className='text-white/60 text-[22px]'>after bold brand identity</p>
                </div>

                {/* div6 */}
                <div className="flex-none h-[200px] w-[362px] bg-[#F5F5F5] rounded-2xl p-6">
                    <h3>Multi-disciplinary team blending branding, design and tech seamlessly</h3>
                </div>

                {/* div7 */}
                <div className="flex-none h-[500px] w-[362px] p-6 rounded-2xl bg-[url('src/assets/slider2.png')] bg-cover">
                    <div className='h-7 overflow-hidden '>
                        <div ref={textRef} className=' flex flex-col opacity-60'>
                            <h4 className='border-1 border-amber-500/0'>Legal</h4>
                            <h4 className='border-1 border-amber-500/0'>Travel</h4>
                            <h4 className='border-1 border-amber-500/0'>AI</h4>
                            <h4 className='border-1 border-amber-500/0'>Eductaion</h4>
                            <h4 className='border-1 border-amber-500/0'>Health</h4>
                            <h4 className='border-1 border-amber-500/0'>Finance</h4>
                            <h4 className='border-1 border-amber-500/0'>Ecommerce</h4>
                            <h4 className='border-1 border-amber-500/0'>Legal</h4>
                            <h4 className='border-1 border-amber-500/0'>Travel</h4>
                        </div>
                    </div>
                    <div className='h-9 overflow-hidden'>
                        <div ref={textRef1} className=' flex flex-col'>
                            <h3>Travel</h3>
                            <h3>AI</h3>
                            <h3>Eductaion</h3>
                            <h3>Health</h3>
                            <h3>Finance</h3>
                            <h3>Ecommerce</h3>
                            <h3>Legal</h3>
                        </div>
                    </div>
                    <div className='h-7 overflow-hidden'>
                        <div ref={textRef3} className=' flex flex-col opacity-60'>
                            <h4 className='border-1 border-fuchsia-400/0'>AI</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Eductaion</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Health</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Finance</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Ecommerce</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Legal</h4>
                            <h4 className='border-1 border-fuchsia-400/0'>Travel</h4>
                        </div>
                    </div>

                </div>

                <div className='bg-amber-800 opacity-0 h-100 -ml-1' >.</div>



            </div>
        </div>
    )
}

export default CardSlider