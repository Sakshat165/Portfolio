import React,{useEffect}from 'react'
import '../Styles/about.css'
const Aboutme = ({setShowResume}) => {
    useEffect(()=>
    {
        setShowResume(false);
        return()=>setShowResume(true);
    },[setShowResume])
  return (
    <div className='container h'>
      <div className='hey card'> 

      </div>
    </div>
  )
}

export default Aboutme
