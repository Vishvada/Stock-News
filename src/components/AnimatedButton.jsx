import React,{Component} from 'react';
import '../assets/styles/button.css'

export default function Button(props){
    // const [isHover,setIsHover]=useState(false);
    // console.log(props.name)

    return(
        <div className={props.classes+' button'} onClick={props.action}>{props.name}</div>
    )
}