import s from "../container.module.scss"
import { useRef, useLayoutEffect } from "react"
import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function Horizontal({children, style}){
    const triggerRef = useRef(null)
    const sectionRef = useRef(null)
    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            let sections = gsap.utils.toArray(".box")
            gsap.to(sections, {
                xPercent : -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger:{
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end : ()=>'+=' + sectionRef.current.offsetWidth,
                }
            }, triggerRef)
            return ()=> ctx.revert()
        })
    })
    style = {...style, overflowX : 'scroll', display : "flex"}
    return(
        <div className={`${s.container}`} id="container"  ref={triggerRef}>
            <div ref={sectionRef} style={style}>
                {children}
            </div>
        </div>
    )
}