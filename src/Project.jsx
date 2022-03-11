import React from 'react'
import { useParams } from 'react-router-dom'

export default function Project() {
    let {projectname} = useParams();
    
  return (
    <div>Project - {projectname}</div>
  )
}
