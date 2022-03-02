
import React from 'react'

 const ProjectDetails = (props) => {
    //  console.log(props)
     const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0 ">
        <div className="card-content">
            <div className="card-title"> Project Title -{id} </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aut, repellendus cumque quidem dolorum ipsam, omnis a at minima consequuntur, cum pariatur. Sint recusandae fugit corporis soluta eveniet. Vero, distinctio?</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>posted by alamin Sarker</div>
                <div>2m, 23december, 2022</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails;