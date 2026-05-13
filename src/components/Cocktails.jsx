import React, {useRef} from 'react'
import { cocktailLists,mocktailLists } from '../../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {


const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
        trigger:'#cocktails',
        start:'top 30%',
        end: 'bottom 80%',
        scrub:true,
    }  
})
 
parallaxTimeline
 .from('#c-left-leaf',{
        x:-100 , y:100
    })

 .from('#c-right-leaf',{
        x:100 , y:-100
    })
//  const sectionRef = useRef(null)
  
    
//   useGSAP(()=> {

//     gsap.timeline({
//         scrollTrigger: {
//             trigger:sectionRef.current,
//             start:'top 30%',
//             end:'bottom 80%',
//             scrub:true,
//         }
//     })

//     .to('#c-left-leaf',{y:150},0)
//     .to('#c-right-leaf',{y:-150},0)
    

//   },{scope:sectionRef})
    
  return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt='l-leaf' id='c-left-leaf' ></img>
      <img src="/images/cocktail-right-leaf.png" alt='r-leaf' id='c-right-leaf' ></img>
      <div className='list'>
        <div className='popular'>
            <h2>Most Popular Cocktails:</h2>
            <ul>
                {cocktailLists.map(({name, price, detail, country})=>{
                    return <li className='flex' key={name}>
                        <div className="md:me-28">
                            <h3>{name}</h3>
                            <p>{`${country} | ${detail}`}</p>
                        </div>
                        <span>-{price}</span>
                    </li>
                })}
            </ul>
        </div>
         <div className='loved'>
            <h2>Most Popular Mocktails:</h2>
            <ul>
                {mocktailLists.map(({name, price, detail, country})=>{
                    return <li className='flex' key={name}>
                        <div className="me-28">
                            <h3>{name}</h3>
                            <p>{`${country} | ${detail}`}</p>
                        </div>
                        <span>-{price}</span>
                    </li>
                })}
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
