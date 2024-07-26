import React,{Component} from 'react';
import '../assets/styles/infinite-scroller.css'

/*
props :
image src
*/

export default function InfiniteScroller(props){
    console.log(props.images.length)
    return(
        <div className="news-container" >
            <div className="scrolling-content">
                {props.images.map((image)=><img key={image.id} src={image.src} className="card-image"/>)}
                {props.images.map((image)=><img key={image.id} src={image.src} className="card-image"/>)}
            </div>
        </div>              
    )
}