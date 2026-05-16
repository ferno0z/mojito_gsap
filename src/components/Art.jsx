import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Art = () => {
 
    const isMobile = useMediaQuery({maxWidth:767})

  useGSAP(()=> {
    const startValue = isMobile ? 'top 20%' : 'top top';

    const maskedTimeline = gsap.timeline({
        scrollTrigger: {
            trigger:'#art',
            start:startValue,
            end:'bottom center',
            scrub:1.5,
            pin:true
        }
    })

    maskedTimeline
    .to('.will-fade', {opacity:0, stagger:0.01, ease:'power1.inOut'})
    .to('.masked-img', {scale:1.3, maskPosition:'center',maskSize:'400%', duration:1, ease:'power1.inOut'})
    .to('.masked-content',{opacity:1, ease:'power1.inOut', duration:1})
  })  

  return (
    <section id="art">
        <div className='container mx-auto h-full pt-20'>
            <h2 className='will-fade'>The Art</h2>
            <div className='content'>
                <ul className='space-y-4 will-fade'>
                    {goodLists.map((feature,index) => {
                        return <li key={index} className='flex items-center gap-2'>
                            <img src="/images/check.png" alt="check"></img>
                            <p>{feature}</p>
                        </li>
                    })}
                </ul>
                <div className='cocktail-img'>
                    <img src="/images/under-img.jpg" alt='under' className='abs-center masked-img size-full object-contain mb'/>
                    
                </div>

                <ul className=' space-y- 4 will-fade'>
                    {featureLists.map((feature,index) => {
                        return <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="/images/check.png" alt="check"></img>
                            <p className='md:w-fit w-60'>{feature}</p>
                        </li>
                    })}
                </ul>
            </div>

            <div className='masked-container'>
                <h2 className='will-fade'>Sip Worthy Perfection</h2>
                <div className='masked-content'>
                    <h3>Made with Craft, Poured with Perfection</h3>
                    <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Art
