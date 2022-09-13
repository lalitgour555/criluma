import React from 'react'
import './ImageHover.css';

const ImageHover = () => {
  return (<>   
   <div id="box-search  align-text-bottom"> 
    <div class="w-100"
    style={{position:"relative"}}
    >
    <img style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/offerta vacanze.png'} />  
      
        <div class="caption col-sm Centered  ">
        
               <div >
               <div id="box-search  caontainer align-text-bottom"> 
    <div class="w-100"
    style={{position:"relative"}}
    >
               <img style={{ width:"100%" , height:""}}  src={process.env.PUBLIC_URL + '/image/Dotted airplane trajectories cartoon illustration set [Convertito] 1.png'} />  
      
        <div class="caption col-sm Centered  ">
        <h1 className='hf-50 p-1 hxl1'>MY TOUR</h1>
               <h3>One space for all your travelels </h3> 
               <div>

               </div>

        </div> 
    </div>
</div>
               {/* <img style={{ width:"100%" , height:""}}  src={process.env.PUBLIC_URL + '/image/Dotted airplane trajectories cartoon illustration set [Convertito] 1.png'} />   */}
               </div>

        </div> 
    </div>
</div>



    {/* <div class="carousel-inner">
           <div class="carousel-item active">
               <img
               style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/offerta vacanze.png'} />  
             <div class="carousel-caption d-none d-md-block">
                 
                     <div className=" col-sm  centered">
                   <h1  className='hf-50 p-1'>MY TOUR</h1>
               <h3 >One space for all your travels</h3>                     </div>
                    <img style={{ width:"100%" , height:""}}  src={process.env.PUBLIC_URL + '/image/Dotted airplane trajectories cartoon illustration set [Convertito] 1.png'} />  
             </div>
          </div>
          
        </div> */}
</>

  )
}

export default ImageHover