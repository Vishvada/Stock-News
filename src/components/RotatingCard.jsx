import React,{Component} from 'react';
import '../assets/styles/rotating-card.css'
import Button from './AnimatedButton';

export default function RotatingCard(props){

    return(
        <div className="rotating-card-container">
            <div className="bottom-card">
                <div className="top-card">
                    <div className="top-card-content">
                        <h1 id="card-heading">Stay Updated with Stock News</h1>
                        <h2 id="card-body">Get the latest news and updates on all your favorite stocks in one place.</h2>
                    </div>
                    <div className="top-card-button-container">
                        <Button classes="filled fade-color" name="Explore Stock News"/>
                    </div>
                </div>
            </div>
        </div>        
    )
}