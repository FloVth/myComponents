'use client'
import { useEffect, useRef, useLayoutEffect } from "react"
import s from "./container.module.scss"
import Horizontal from "./horizontal/Horizontal"
import Vertical from "./vertical/Vertical"

const Container = ({children, style, scroll})=>{
    if (scroll == "horizontal"){
        return(
            <Horizontal style={style}>
                {children}
            </Horizontal>
        )
    }
    else{
        return(
            <Vertical style={style}>
                {children}
            </Vertical>
        )
    }
}
export default Container