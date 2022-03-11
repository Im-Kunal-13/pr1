import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Temp() {
    let navigate = useNavigate()
  return (
    <button onClick={() => {
        navigate("/use-navigate")
    }}>use navigate</button>
  )
}
