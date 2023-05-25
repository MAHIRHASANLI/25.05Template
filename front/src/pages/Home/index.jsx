import React from 'react'
import About from './About'
import Block from './Block'
import MeetOur from './MeetOur'
import OurLast from './OurLast'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <>
   <About/>
   <Block/>
   <MeetOur/>
   <OurLast/>
   </>
</div>

  )
}

export default Home