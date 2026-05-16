import './App.css'
import Cocktails from './components/Cocktails';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import About from './components/About';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About /> 
    </main>
  )
}

export default App
