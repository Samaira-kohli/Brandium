import React, { useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import SplitText from 'gsap/SplitText.js';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(SplitText)

const Navbar = () => {
    const sidebarRef = useRef(null)
    const navRef = useRef(null)
    const [sidebar, setSidebar] = useState(false)

    const navigate = useNavigate()

    // ===== Navbar Intro Animation =====
    useGSAP(() => {
        const split = SplitText.create('.navText', { type: 'chars' })

        const tl = gsap.timeline()

        tl.from(split.chars, {
            yPercent: 80,
            duration: 0.7,
            stagger: 0.007,
            ease: "power3.out"
        }, '+=0.1')
            .from('.but', {
                yPercent: 30,
                duration: 0.6,
                opacity: 0
            }, '-=0.5')
            .from('.menuBtn', {
                scale: 0,
                duration: 0.5
            }, '-=0.5')

        gsap.set(sidebarRef.current, {
            xPercent: 100,
            pointerEvents: "none"
        })

        return () => split.revert()
    }, { scope: navRef })



    // ===== Sidebar Open Close Animation =====
    useGSAP(() => {
        if (sidebar) {
            const tl = gsap.timeline()

            tl.to(sidebarRef.current, {
                xPercent: 0,
                duration: 0.9,
                ease: "expo.out",
                pointerEvents: "auto"
            })
                .from('.sideLink', {
                    x: 70,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power4.out"
                }, '-=0.55')
                .from('.closeBtn', {
                    rotate: -90,
                    scale: 0,
                    duration: 0.5,
                    ease: "expo.out"
                }, '-=0.7')

        } else {
            gsap.to(sidebarRef.current, {
                xPercent: 100,
                duration: 0.8,
                ease: "expo.inOut",
                pointerEvents: "none"
            })
        }
    }, [sidebar])



    return (
        <main ref={navRef} className='w-full fixed z-[500] top-0 caret-transparent'>
            <div className='flex justify-between items-center py-5 px-4 lg:px-10'>

                {/* logo */}
                <div className='overflow-hidden'>
                    <p onClick={() => navigate('/')} className='navText cursor-pointer text-[1rem] lg:text-[1.2rem] font-semibold'>
                        Brandium<sup>®</sup> Agency
                    </p>
                </div>

                {/* desktop nav */}
                <div className="hidden lg:flex gap-16 overflow-hidden">
                    <h4 onClick={() => navigate('/work')} className='navText cursor-pointer'>Work</h4>
                    <h4 onClick={() => navigate('/services')} className='navText cursor-pointer'>Services</h4>
                    <h4 onClick={() => navigate('/about')} className='navText cursor-pointer'>About</h4>
                    <h4 onClick={() => navigate('/approach')} className='navText cursor-pointer'>Approach</h4>
                </div>

                {/* desktop button */}
                <button
                    onClick={() => navigate('/contact')}
                    className='but hidden lg:block bg-black text-white rounded-full py-3 px-6 cursor-pointer'
                >
                    Let's Talk
                </button>

                {/* mobile menu button */}
                <button
                    onClick={() => setSidebar(true)}
                    className='menuBtn cursor-pointer lg:hidden w-10 h-10 rounded-full bg-black flex flex-col justify-center items-center gap-1'
                >
                    <span className='w-5 h-[1.5px] bg-white rounded-full'></span>
                    <span className='w-5 h-[1.5px] bg-white rounded-full'></span>
                </button>


                {/* ===== Mobile Sidebar ===== */}
                <div
                    ref={sidebarRef}
                    className='fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col px-5 py-5'
                >
                    {/* close button */}
                    <div className='w-full flex justify-end'>
                        <button
                            onClick={() => setSidebar(false)}
                            className='closeBtn text-white text-5xl rotate-45 cursor-pointer'
                        >
                            +
                        </button>
                    </div>

                    {/* links */}
                    <div className='flex flex-col justify-center h-full gap-3'>
                        <h5 onClick={() => { navigate('/'); setSidebar(false) }} className='sideLink text-white text-4xl md:text-7xl font-semibold tracking-tight cursor-pointer'>Home</h5>
                        <h5 onClick={() => { navigate('/work'); setSidebar(false) }} className='sideLink text-white text-4xl md:text-7xl font-semibold tracking-tight cursor-pointer'>Work</h5>
                        <h5 onClick={() => { navigate('/services'); setSidebar(false) }} className='sideLink text-white text-4xl md:text-7xl font-semibold tracking-tight cursor-pointer'>Services</h5>
                        <h5 onClick={() => { navigate('/about'); setSidebar(false) }} className='sideLink text-white text-4xl md:text-7xl font-semibold tracking-tight cursor-pointer'>About</h5>
                        <h5 onClick={() => { navigate('/contact'); setSidebar(false) }} className='sideLink text-white text-4xl md:text-7xl font-semibold tracking-tight cursor-pointer'>Contact</h5>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Navbar