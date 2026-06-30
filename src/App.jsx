import { useState } from 'react'
import Marquee from './components/Marquee'
import Navigation from './components/Navigation'
import PosterCanvas from './features/poster-gallery/PosterCanvas'
import AboutUsView from './features/about-us/AboutUsView'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="h-screen w-screen flex flex-col bg-[#efe7ff] text-slate-800 overflow-hidden font-sans relative">
      
      <div className="w-full flex-none z-[9999]">
        <Marquee />
      </div>

      <div className="flex-1 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full z-40 pointer-events-none">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="w-full h-full">
          {activeTab === 'home' ? <PosterCanvas /> : <AboutUsView />}
        </div>
      </div>

      <div className="w-full flex-none z-[9999]">
        <Marquee />
      </div>

    </div>
  )
}

export default App