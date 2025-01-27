import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-zinc-900" >
<Navbar/>

<Landing/>
<Marquee/>
<About/>
<Eyes/>
    </div>
  )
}

export default App