import {useState,useEffect} from 'react'

const New = () =>{

    const [screenSize,setScreenSize]=useState({
        width: window.innerWidth,
        height: window.innerHeight,
        })

    const updateSize = ()=>{
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
            })}

    useEffect(()=>{
        window.addEventListener('resize',updateSize)

        return ()=>{
            window.removeEventListener('resize',updateSize)
            }
        },[])
    return(
        <div>
            <p>width.{screenSize.width}</p>
            <p>height.{screenSize.height}</p>
            </div>
           )
    }

export default New