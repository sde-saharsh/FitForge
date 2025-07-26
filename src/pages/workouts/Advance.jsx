import React, { useEffect } from 'react'

const Advance = () => {

  let modeLight = true
  useEffect(()=>{
    const mode = localStorage.getItem('mode')
    if(mode === 'dark'){
      modeLight = false
    } else{
      modeLight = true
    }
  },[])

  return (
    <div className={`bg-amber-50 ${modeLight ? 'text-black' : 'text-white'}`}>Advance</div>
  )
}

export default Advance