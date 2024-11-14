import s from "../container.module.scss"
export default function Vertical ({children, style}){
    style = {...style, scrollSnapType : "y mandatory", overflowY : "scroll", height : "100vh"}
    return(
        <div className={`${s.container}`} id="container" >
            <div style={style}>
                {children}
            </div>
        </div>
    )
}