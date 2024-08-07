import React,{Component} from 'react';
import '../assets/styles/button.css';
import { useNavigate } from 'react-router-dom';

export default function Button(props){
    const navigate = useNavigate();

    // to navigate incase of a page change
    // to property is the same as the one used in Link element of 'react-router-dom'

    const handleClick = () => {
        if (props.to!==null) {
            navigate(props.to);
        }
    };

    return(
        <button className={props.classes+' button'} onClick={handleClick}>{props.name}</button>
    )
}