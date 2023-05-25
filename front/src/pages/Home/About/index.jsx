import React from 'react'
import Style from "./index.module.css"
import { Button } from '@mui/material'
const About = () => {
  return (
    <div className={Style.Background}>
      <div>
        <h1 className={Style.hhh}>
          HELLO WE'RE BIZPRO
        </h1>
        <h6 className={Style.ppp}>
          SUB HEAD. MOTTO OR MISSION SUBTITLE
        </h6>
        <button className={Style.Btn}>SEE OUR PROJECTS</button>
      </div>
    </div>
  )
}

export default About