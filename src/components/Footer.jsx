import React from 'react'
import ButtonComponent from './ButtonComponent'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

const Footer = () => {

    useGSAP(() => {
        const logosplit = SplitText.create('.logo', { type: 'chars' })

        gsap.from(logosplit.chars, {
            duration: 0.7,
            stagger: 0.04,
            yPercent: -140,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.logoDiv',
                start: '30% 45%',
            }
        })
    })

    return (
        <footer className='logoDiv w-full bg-black text-white pt-14 md:pt-20 pb-8 md:pb-10 relative overflow-hidden'>

            {/* TOP */}
            <div className='px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10'>

                {/* LEFT */}
                <div className='flex flex-col justify-between'>

                    <div>

                        <h5 className='text-4xl md:text-[3vw] leading-none tracking-[-0.05em] md:w-[64%]'>
                            Ready to turn your ideas into big moves?
                        </h5>

                        <div className='mt-6'>
                            <ButtonComponent
                                text='Get in touch'
                                color='white'
                            />
                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className='flex flex-col sm:flex-row justify-between md:justify-end gap-10 md:gap-35'>

                    {/* NAV */}
                    <div>

                        <p className='text-sm text-zinc-500 uppercase mb-2'>
                            Navigation
                        </p>

                        <ul className='space-y-1 text-base md:text-lg'>
                            <li className='cursor-pointer hover:text-lime-300'>Homepage</li>
                            <li className='cursor-pointer hover:text-lime-300'>Work</li>
                            <li className='cursor-pointer hover:text-lime-300'>Services</li>
                            <li className='cursor-pointer hover:text-lime-300'>About</li>
                            <li className='cursor-pointer hover:text-lime-300'>Approach</li>
                            <li className='cursor-pointer hover:text-lime-300'>✦ Insights</li>
                            <li className='cursor-pointer hover:text-lime-300'>Contact</li>
                        </ul>

                    </div>

                    {/* SOCIAL */}
                    <div>

                        <p className='text-sm text-zinc-500 uppercase mb-2'>
                            Let's Connect
                        </p>

                        <ul className='space-y-1 text-base md:text-lg'>
                            <li className='cursor-pointer hover:text-lime-300'>Instagram</li>
                            <li className='cursor-pointer hover:text-lime-300'>LinkedIn</li>
                            <li className='cursor-pointer hover:text-lime-300'>Facebook</li>
                        </ul>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <p className='text-sm text-zinc-500 uppercase mb-2'>
                            Get in Touch
                        </p>

                        <div className='space-y-1 text-base md:text-lg'>

                            <p>020 210 1622</p>
                            <p>hello@brandium.nl</p>

                            <div className='mt-5 leading-6'>
                                <p>Bos en Lommerplein 274</p>
                                <p>1055 RW Amsterdam</p>
                                <p>The Netherlands</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* LOGO */}
            <div className='mt-16 md:mt-20 -mb-2 md:-mb-10 overflow-hidden pointer-events-none'>

                <h5 className='logo text-[18vw] sm:text-[15vw] md:text-[14vw] leading-none tracking-[-0.07em] whitespace-nowrap text-zinc-100'>

                    Brandium

                    <span className='align-top text-[6vw] md:text-[4vw]'>
                        ®
                    </span>

                    <span className='hidden sm:inline'>
                        {" "}Agency
                    </span>

                </h5>

            </div>

        </footer>
    )
}

export default Footer