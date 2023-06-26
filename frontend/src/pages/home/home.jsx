import React from 'react'
import './home.css';
import { Button } from '../../components/Button';

export default function home() {
  return (

    <div className='hero-container'>

      <video src="/videos/video-2.mp4" autoPlay loop muted />

      <h1>Welcome to SquareJ</h1>

      <p>Let us begin!</p>

      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

      </div>
    </div>
  )
}
