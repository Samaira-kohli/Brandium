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
        <footer className='logoDiv w-full h-auto bg-black text-white pt-20 pb-10 relative overflow-hidden'>

            {/* TOP GRID */}
            <div className='px-10 grid grid-cols-2 gap-20 relative z-10'>

                {/* LEFT BIG CTA */}
                <div className='col-span-1 flex flex-col justify-between'>
                    <div>
                        <h5 className='text-white text-[3vw] leading-[1] pb-5  tracking-[-0.05em] w-[64%]'>
                            Ready to turn your ideas into big moves?
                        </h5>
                        <ButtonComponent text='Get in touch' color='white' />
                    </div>
                </div>

                <div className='flex gap-35 justify-end'>
                    {/* NAVIGATION */}
                    <div className='pt-1'>
                        <p className='text-sm text-zinc-500 uppercase mb-1'>Navigation</p>
                        <ul className='space-y-0.5 text-lg'>
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
                    <div className=''>
                        <p className='text-sm text-zinc-500 uppercase mb-1'>Let's Connect</p>
                        <ul className='space-y-0.5 text-lg'>
                            <li className='cursor-pointer hover:text-lime-300'>Instagram</li>
                            <li className='cursor-pointer hover:text-lime-300'>LinkedIn</li>
                            <li className='cursor-pointer hover:text-lime-300'>Facebook</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className=''>
                        <p className='text-sm text-zinc-500 uppercase mb-1'>Get in Touch</p>
                        <div className='space-y-0.5 text-lg'>
                            <p>020 210 1622</p>
                            <p>hello@brandium.nl</p>

                            <div className='mt-5 leading-[1.4]'>
                                <p>Bos en Lommerplein 274</p>
                                <p>1055 RW Amsterdam</p>
                                <p>The Netherlands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HUGE TYPOGRAPHY */}
            <div className=' -mb-10 mt-20 w-full overflow-hidden pointer-events-none'>
                <h5 className='logo h-62 text-[14vw] leading-none tracking-[-0.07em] font-normal text-zinc-100 whitespace-nowrap'>
                    Brandium<span className='align-top text-[4vw]'>®</span> Agency
                </h5>
            </div>

        </footer>
    )
}

export default Footer