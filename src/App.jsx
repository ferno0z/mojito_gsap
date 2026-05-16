import './App.css'
import Cocktails from './components/Cocktails';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import About from './components/About';
import Art from './components/Art';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About /> 
      <Art />
    </main>
  )
}

export default App
