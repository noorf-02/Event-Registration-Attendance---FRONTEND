import React from 'react'
import MainInterfaceComponent from '../COMPONENTS/MainInterfaceComponent'
import BrowseEventsMain from '../COMPONENTS/BrowseEventsMain'
import About from '../COMPONENTS/About'
import HostEvent from '../COMPONENTS/HostEvent'
import Footer from '../COMPONENTS/Footer'

function MainInterface() {
  return (
    <div>
      <MainInterfaceComponent/>
      <BrowseEventsMain/>
      <About/>
      <HostEvent/>
      <Footer/>
    </div>
  )
}

export default MainInterface
