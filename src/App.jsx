import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import VisionMission from './components/VisionMission'
import Capabilities from './components/Capabilities'
import Governance from './components/Governance'
import Vifc from './components/Vifc'
import DficTower from './components/DficTower'
import Operations from './components/Operations'
import DigitalVietnam from './components/DigitalVietnam'
import Closing from './components/Closing'
import './styles/components.css'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <VisionMission />
        <Capabilities />
        <Governance />
        <Vifc />
        <DficTower />
        <Operations />
        <DigitalVietnam />
        <Closing />
      </main>
    </>
  )
}
