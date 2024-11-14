'use client'
import { useEffect, useRef, useLayoutEffect } from "react"
import s from "./container.module.scss"
import Horizontal from "./horizontal/Horizontal"
import Vertical from "./vertical/Vertical"
/* 
Container component
-> Entrée le style nécessaire au composant + scroll (doit être : horizontal si on veut un scroll horizontal, ou null/vertical/n'importe quelle autre valeur si on veut un scroll vertical)
-> De plus il est nécessaire de mettre le contenu du container directement en enfant : <Container> 
    <div></div>
    <div></div>
    ....
    <div></div>
</Container>

Ici le résultat sera un container, avec le style que l'on veut et un smooth scroll (étape par étape)
*/
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