import { useState } from 'react'
import '../App.css'
import Button from './components/AnimatedButton'
import RotatingCard from './components/RotatingCard'
import InfiniteScroller from './components/InfiniteScroller'
import Login from './screens/Login'
import NavBar from './components/NavBar'
import './assets/styles/styles.css'
import Features from './components/features'

var images=[
    {
      id:0,
      src:''
    },
    {
      id:1,
      src:''
    },
    {
      id:2,
      src:''
    },
    {
      id:3,
      src:''
    },
    {
      id:4,
      src:''
    },
    {
      id:5,
      src:''
    }
  ]

const menuItems=[
    {
      id:0,
      text:'Home',
      href:'#home'
    },{
      id:1,
      text:'Stocks',
      href:'#stocks'
    },{
      id:2,
      text:'News',
      href:'#news'
    },{
      id:3,
      text:'About',
      href:'#about'
    }
  ]

  const features=[
    {
      id:0,
      feature:'f1',
      content:'f1',
      image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
    },{
      id:1,
      feature:'f2',
      content:'f2',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vnGsgBgV8QW50dp-wZ4GoCNWu4egKYuxAw&s'
    },{
      id:2,
      feature:'f3',
      content:'f3',
      image:'https://illustoon.com/photo/7257.png'
    }
  ]

function Home() {
  return (
    <div>
      <NavBar items={menuItems}/>
      <h1 className="product-name">Stock News Hub</h1>
      <h2 className="product-description">Stay updated with the latest stock news for all your favorite companies in one {'\n'}place.</h2>
      <InfiniteScroller images={images}/>
      <Features features={features}/>
      <RotatingCard/>
    </div>
  )
}

export default Home
