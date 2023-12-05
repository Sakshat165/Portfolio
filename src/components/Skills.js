import React,{useEffect}from 'react'

const Skills = ({setShowResume}) => {
    useEffect(()=>
    {
        setShowResume(false);
        return()=>setShowResume(true);
    },[setShowResume])
  return (
    <div>
      Skills
    </div>
  )
}

export default Skills
