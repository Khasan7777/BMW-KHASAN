import React from 'react'
import "./Display.css"
const Display = () => {
  return (
    <div className='DisplayMain'>
    <div className='Beauty'>
    AGED LIKE A BEAUTY
    </div>
    <div className='Beast'>
    RUNS LIKE A BEAST
    </div>
    <div className='Bmwvideo'>
   <video width='20%' height='auto' controls>
   <source src='/assets/BmwVideo.mp4' type='Video/mp4'>
    
   </source>
   </video>
    </div>

   <div className='Speed'>
   <div className='Numbers'>
   <div className='Values'>
    12.5M/Gal
   </div>
   <div className='Divivder'>

   </div>
   <div className='Values'>
    600 N.M
   </div>
   
   <div className='Divivder'>

   </div>
   <div className='Values'>
    349 HP
   </div>
   <div className='Divivder'>

   </div>
   <div className='Values'>
   1.534 T 
   </div>
   
   <div className='Divivder'>
   </div>
   <div className='Values'>
   234 MPH
   </div>
   
   <div className='Divivder'>

   </div>
   <div className='Values'>
   2 Turbos
   </div>
  
  
 
</div>
   </div> 
   <div className='TitleNumbers'>
   <div className='Values'>Mileage</div>
   <div className='ValuesT'>Torque</div>
   <div className='Values'>Horsepower</div>
   <div className='Values'>Net Weight</div>
   <div className='Values'>Top Speed</div>
   <div className='Values'>Enhancements</div>
   </div>


    </div>
  )
}

export default Display