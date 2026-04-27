import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/SplitText";

const Loader = () => {

  useGSAP(() => {
    const splitLoader = SplitText.create(".actual-text",{ type: 'chars' })

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.main',{
          yPercent:-100,
          duration:2,
          ease: "power4.inOut",
          display: 'none'
        })
      }
    })
    tl.to('.loader-text', {
      y: 0,
      delay:0.7,
      ease: 'power1.out',
      duration:0.5
    })
    .from(splitLoader.chars,{
      opacity: 0,
      stagger: 0.03,
      duration:0.5,
      ease: "bounce.inOut",
    })
  })

  return (
    <div className="main relative w-full bg-black h-screen flex justify-center items-center ">
      <div className=" py-5 overflow-hidden">
        <p className="loader-text text-white text-2xl   translate-y-15 opacity-20">Brandium Agency</p>
        <p className="actual-text absolute text-2xl left-1/2  -translate-1/2 top-1/2 text-white opacity-100">Brandium Agency</p>
      </div>
    </div>
  );
};

export default Loader;