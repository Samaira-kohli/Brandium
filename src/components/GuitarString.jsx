import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const GuitarString = () => {
    const svgRef = useRef(null)
    const pathRef = useRef(null)
    const guitarRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(guitarRef.current,
            {
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: guitarRef.current,
                    start: 'top 70%',
                    // markers: true,
                }
            }
        )
    },{scope: guitarRef.current})

    const handleMove = (e) => {
        const rect = svgRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const width = rect.width
        const path = `M 30 75 Q ${x} ${y} ${width - 40} 75`

        gsap.to(pathRef.current, {
            attr: { d: path },
            duration: 0.5,
            ease: 'elastic.out(1,0.2)'
        })
    }

    const handleLeave = (e) => {
        const rect = svgRef.current.getBoundingClientRect()
        const width = rect.width
        const path = `M 30 75 Q 300 75 ${width - 40} 75`
        gsap.to(pathRef.current, {
            attr: { d: path },
            duration: 1.5,
            ease: 'elastic.out(1,0.1)'
        })
    }

    return (
        <div className='h-[150px] w-full guitarMainDiv md:my-18'>
            <div ref={guitarRef} >
                <svg
                    ref={svgRef}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    width='100%'
                    height='150'
                >
                    <path ref={pathRef} d="M 30 75 Q 300 75 1480 75"
                        stroke='black' fill='transparent'></path>
                </svg>
            </div>
        </div>
    )
}

export default GuitarString