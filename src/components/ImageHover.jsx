import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ImageHover = ({ img, heading, sub1, sub2, sub3 }) => {
    const imgRef = useRef(null)
    const containerRef = useRef(null)
    const cursorRef = useRef(null)

    const handleMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect()

        // screen position → container position → normalized value → animation
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(imgRef.current, {
            scale: 1.02,
            duration: 0.4
        })

        // 🟡 move "View" circle
        gsap.to(cursorRef.current, {
            x: x,
            y: y,
            duration: 0.3,
            ease: "power3.out",
        })
    }

    const handleEnter = () => {
        gsap.to(cursorRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
        })
    }

    const handleLeave = () => {
        // reset image
        gsap.to(imgRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
        })

        // hide cursor
        gsap.to(cursorRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
        })
    }

    return (
        <div
            ref={containerRef}
            className='md:h-[96vh] relative overflow-hidden cursor-pointer '
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          
        >
            <div className='overflow-hidden h-[93%] w-full'>
                <img
                alt=''
                src={img}
                ref={imgRef}
                className='object-cover w-full overflow-hidden imgZoom'
            />
            </div>

            {/* 🟡 Floating View Circle */}
            <div
                ref={cursorRef}
                className=' pointer-events-none absolute top-0 left-0 w-24 h-24 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-sm text-black'
                style={{
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 0,
                }}
            >
                View
            </div>

            {/* Bottom Content */}
            <div className='flex md:justify-between items-center h-[7%] md:gap-0 gap-3'>
                <h5 className='md:text-2xl'>{heading}</h5>

                <div className='flex text-xs text-black/50 flex-row-reverse gap-1'>
                    <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>{sub3}</p>
                    <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>{sub2}</p>
                    <p className='bg-gray-300/16 md:py-2 md:px-4 p-1 rounded-sm'>{sub1}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageHover