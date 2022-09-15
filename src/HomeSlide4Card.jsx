import React from 'react'
import Slider from "react-slick";
import './HomeSlide4Card.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlide4Card = () => {
    const renderSlides = () =>
    ["Rectangle 62", "Rectangle 63", "Rectangle 64", "Rectangle 62", "Rectangle 63", "Rectangle 64",].map(num =>{ 
        
        return (
      <div className='container'>   
 <div className="col-sm  caResp3">
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + `/image/${num}.png`} /> 
    </div>      
        </div>
      </div>
    )}
    );
        

  return (
    <div className='bg-color'>

<Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  )
}

export default HomeSlide4Card