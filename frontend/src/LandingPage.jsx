import React from 'react'
import ShuffleText from 'react-shuffle-text'

const LandingPage = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
     <div style={{
          fontFamily: "orbitron",
          fontWeight: "bold",
     }}
     className='md:text-9xl text-4xl text-center text-white'
     >

      <ShuffleText
       content="HACK/<FEST'25" />
       </div>
    </div>
  )
}

export default LandingPage
