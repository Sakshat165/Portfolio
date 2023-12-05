import React,{ useEffect } from 'react'
import '../Styles/Education.css'
const Education = ({setShowResume}) => {
    useEffect(()=>
    {
        setShowResume(false);
        return()=>setShowResume(true);
    },[setShowResume])

    const education=[
        {
            id:1,
            name:"Christ College",
            location:"Pune",
            course:"Bsc Computer Science",
            marks:"9.1 CGPA"
        },
        {
            id:2,
            name:"Nowrosjee Wadia College",
            location:"Pune",
            course:"12th"
        },
        {
            id:3,
            name:"Holy Cross Convent School",
            location:"Mumbai",
            course:"10th"
        }
    ]
  return (
    <>
        <div className="container mt-5">
        <div className="row">
        {education.map((edu) => (
            <div className="col md-4 py-2" key={edu.id}>
          <div className="card" >
          <div className="card-body">
            <h3 className="card-title">{edu.name}</h3>
            <h5>{edu.course}</h5>
            <h5>{edu.location}</h5>
            <h5>{edu.marks}</h5>
          </div>
        </div>
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Education
