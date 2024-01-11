import React from 'react'
import Slider from '../shared/Slider'
import Service from '../shared/Service'
import Menu from '../shared/Menu'
import ChefsTeam from '../shared/ChefsTeam'

const Home = () => {
  return (
    <>
      <div className="container-xxl  p-0">
        <Slider/>
        <Service/>
        <Menu/>
        <ChefsTeam/>
        </div>
    </>
  )
}

export default Home