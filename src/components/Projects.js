import React,{useEffect}from 'react'
const Projects = ({setShowResume}) => {
    useEffect(()=>
    {
        setShowResume(false);
        return()=>setShowResume(true);
    },[setShowResume])
    const projects=[
        {
            id:1,
            name:"EasyBook",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:2,
            name:"EasyNews",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:3,
            name:"EasyNotes",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:4,
            name:"Student Management System",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:5,
            name:"TextUtils",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:6,
            name:"Shree Venkateshwara Hotel",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:7,
            name:"MovieBuzz",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:8,
            name:"PinkLady",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        },
        {
            id:9,
            name:"Cryptox",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sint reiciendis labore repudiandae in provident repellat harum, adipisci perferendis quis."
        }
        
    ]
  return (
    <>
        <div className="container mt-5">
        <div className="row">
        {projects.map((pro) => (
            <div className="col md-4 py-2" key={pro.id}>
          <div className="card" style={{height:'16rem'}}>
          <div className="card-body">
            <h3 className="card-title">{pro.name}</h3>
            <h5>{pro.description}</h5>
          </div>
        </div>
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default Projects
