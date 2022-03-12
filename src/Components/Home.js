import {React, useContext} from 'react'
import sidebarContext from './Context/sidebarContext'

export default function Home() {
    const a = useContext(sidebarContext)
  return (
    <div>Home</div>
  )
}
