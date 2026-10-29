import React from 'react'
import Home from '../components/Home'
import Discover from '../components/Discover '
import Counter from '../components/Counter'
import Showhide from '../components/Showhide'
import Darkmod from '../components/Darkmod'

const Layout = ({}) => {
  return (
    <div>
        <Home />
        <Discover/>
        <Showhide/>
        <Counter/>
        <Darkmod/>
    </div>
  )
}

export default Layout