'use client'
import { useEffect, useRef, useLayoutEffect } from "react"
import s from "./container.module.scss"
gsap.registerPlugin(ScrollTrigger)
import {gsap} from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
const Container = ({children, style, scroll})=>{
    if (scroll == "horizontal"){
        style = {...style, overflowX : 'scroll', display : "flex"}
    }
    const triggerRef = useRef(null)
    const sectionRef = useRef(null)
    if (scroll == "horizontal"){
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
    }
    else{
        style = {...style, scrollSnapType : "y mandatory", overflowY : "scroll", height : "100vh"}
    }
    return(
        <div className={`${s.container}`} id="container"  ref={triggerRef}>
            <div ref={sectionRef} style={style}>
                {children}
            </div>
        </div>
    )
}
export default Container