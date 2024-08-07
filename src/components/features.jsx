import { useState } from 'react'
import '../assets/styles/features.css'

/*
props=>{
        features:{
        id:
        feature:
        content:
        image:
        }
    }
*/

export default function Features(props){

    const [image,setImage]=useState(props.features[0].image);

    return (<div className="features-container">
        <div className="text-container">
            {props.features.map(item=><button key={item.id} id={item.id} className={item.id===0?'features highlight':"features"} onClick={()=>{
                    var elements=document.getElementsByClassName('features')
                    for(let buttonInd=0;buttonInd<elements.length;buttonInd++){
                        elements[buttonInd].classList.remove('highlight')
                    }
                    document.getElementById(item.id).classList.add('highlight')
                    setImage(props.features[item.id].image);                    
                }
            }>
                <h1>{item.feature}</h1>
                <p>
                    {item.content}
                </p>
            </button>)}
        </div>
        <div className="image-container">
            <img src={image} style={{height:"350px",width:"600px"}}/>
        </div>
    </div>)
}