import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Hero() {
  return (
    <div className='hero'>

      <div className="hero-page1 comp flex-v gap-md">
        <p className="hero__title title">The AI-Native Cybersecurity Platform. Built to Stop Breaches.</p>

        <div className="flex-v gap">
          <p>If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.</p>
          <div className="flex-h">
            <button className='flex-h gap-sm'>Explore <ArrowForwardIcon /></button>
          </div>

        </div>
      </div>

      <div className="hero-page2"></div>
    </div>
  )
}

export default Hero
