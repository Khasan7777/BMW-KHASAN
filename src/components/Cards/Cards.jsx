import React, { useEffect, useState } from 'react'

import"./Cards.css"
const Cards = () => {
  


  const images = [
    '/assets/BMWM5.0.png',
    '/assets/BMWM5.1.png',
    '/assets/BMWM5.2.png'
  ]

const [currentIndex , setCurrentIndex] = useState(0)
const [CurrentIndex1, setCurrentIndex1] =useState(0)
const [CurrentIndex2, setCurrentIndex2] =useState(0)
useEffect(()=>{
    const interval = setInterval(()=>{
       setCurrentIndex((prevIndex)=>(prevIndex+1) % images.length);
    },3000)
  return()=>clearInterval(interval);
}, currentIndex)


const imagescard2 = [ 
  'assets/BMWM3.0.png',
  '/assets/BMWM3.1.png',
  '/assets/BMWM3.2.png',
]


useEffect(()=>{
     const interval1 = setInterval(()=>{
      setCurrentIndex1((prevIndex1)=>(prevIndex1+1) % imagescard2.length);
      } , 3000)
       return()=> clearInterval(interval1);
     
}, CurrentIndex1)

const imagescard3= [
  
  'assets/BMWI8.0.png',
  '/assets/BMWI8.1.png',
  '/assets/BMWI8.2.png',
]

useEffect(()=>{
  const interval2 = setInterval(()=>{
   setCurrentIndex2((prevIndex2)=>(prevIndex2+1) % imagescard3.length);
   } , 3000)
    return()=> clearInterval(interval2);
  
}, CurrentIndex2)


return(


 <div className='mainPerformanceBox'>
<div className='BannerBox'>


<div className='rightbannerbox'>
  <img src='/assets/bmwm5card.png' alt='bmwpic'
    className='cardm5pic'/>
 
</div>
<div className='leftbannerbox'>
<div className='bannertitle'>BMW</div>

<div className='bannerdescription'>
   The all new M3
</div>
<div className='bannerdescription2'>
   Rumbles your heart to life
</div>
</div>
</div>


<div className='cardbox'>

<div className='m5cardbox'>
    <div className='m5image'>
      <img src={images[currentIndex]} alt='hello this is m5' className='bmwm5image'/>
    </div>
    <div className='m5bmwtitle'>BMW</div>
    <div className='m5title'>m5</div>
       <div className='m5Order'>Order Now</div>
        

</div>
<div className='m3cardbox'>
<div className='m3image'>
  <img src={imagescard2[CurrentIndex1]} className='bmwm3image'/>
</div>
    <div className='m3bmwtitle'>BMW</div>
    <div className='m3title'>m3</div>
      
       <div className='m3Order'>Order Now</div>


</div>
<div className='i8cardbox'>
<div className='i8image'>
<img src={imagescard3[CurrentIndex2]} className='bmwmi8image'/>
</div>
    <div className='i8bmwtitle'>BMW</div>
    <div className='i8title'>i8</div>
      
       <div className='i8Order'>Order Now</div>

</div>
</div>
    </div>
  )
}

export default Cards