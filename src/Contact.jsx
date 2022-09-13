import React from 'react'


const Contact = () => {
  return (
    <div>
<div id="box-search"> 
    <div class="w-100" style={{position:"relative"}}>
    <img style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/offerta vacan.png'} />  
        <div class="caption">
        <h1 className='hf-50 p-1 hxl1'>contact</h1>
               <h1>We are always with you</h1> 
        </div> 
    </div>
</div>
     
      <div className="container">
      <div className="row m-3">

        <div className=" col-sm-4 p-4 "> 
        <div class="card dCenter  bg-inconme  ">
  <div class="card-body p-2 br-none mh-200 "  >
  <div className='d-flex ' style={{alignItem:"center" , justifyContent:"center"}}>
  <img className='m-2' src={process.env.PUBLIC_URL + '/icons/location.png'} />  
</div>
  <h4 className='ptcolor'>Address</h4>
<p> Via Sandro Totti, 2 60100 Ancona</p>
    
  </div>
</div>
</div>
<div className=" col-sm-4 p-3 "> 
        <div class="card text-center  bg-inconme  ">
  <div class="card-body p-2 br-none mh-200 "  >
  <div className='d-flex ' style={{alignItem:"center" , justifyContent:"center"}}>
  <img className='m-2' src={process.env.PUBLIC_URL + '/icons/contact-mail 1.png'} />  
</div>
  <h4 className='ptcolor'>Phone & Email</h4>
<p> Via Sandro Totti, 2 60100 Ancona</p>
    
  </div>
</div>
</div>
<div className=" col-sm-4 p-3 "> 



        <div class="card text-center  bg-inconme  ">

  <div class="card-body p-2 br-none mh-200"  >
  <div className='d-flex ' style={{alignItem:"center" , justifyContent:"center"}}>
<img className='m-2'  src={process.env.PUBLIC_URL + '/icons/facebook.png'} />  
</div>
  <h4 className='ptcolor  m-0'>Stay In Touch</h4>
  <p className='m-0'> Also find us on social Media</p>
  <div className='d-flex justify-content-center' >
    <i class="bi bi-facebook  p-1 fonSioc"></i>
    <i class="bi  bi-youtube p-1 fonSioc"></i>
    <i class="bi  bi-instagram p-1 fonSioc"></i>
    </div>
  </div>
</div>
</div>

      </div>
<div className="row p-2">

  <div className="col-sm-6">
 


<div class="card text-center m-2">
<div class="card-body ">
  <h4  className='ptcolor'>WHAT IS YOUR QUESTION ABOUT?</h4>
  <div class="input-group mb-3">
  <input type="text" class="form-control bSize br-none" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control bSize br-none" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control bSize br-none" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group">
  <input type="text" class="form-control bSize br-none" placeholder="Message" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="d-grid gap-2 pt-2 pb-3">
  <button class="btn pbcolor bSize br-none" type="button">Button</button>
</div>



</div>


</div>
  </div>
  <div className="col-sm-6">
  <div class="card text-center contactbor">
 
  <div class="card-body ">
   <h4 className='ptcolor' >Have You Any Question About Us?</h4>
   <ul className='text-color listynone'>
    <li className='text-left'>Any kind of business solution and consultion don't hesitate to contact with us for imiditate customer support. We are love to hear from you
</li>
    <li>Office Hours:</li>
    <li>Monday: 9.00 - 20.00</li>
    <li>Tuesday: 9.00 - 20.00</li>
    <li>Wednesday: 9.00 - 20.00</li>
    <li>Thursday: 9.00 - 20.00</li>
    <li>Friday: 9.00 - 20.00</li>
    <li>Saturday: 9.00 - 13.00</li>
    <li>Sunday: Close</li>
   </ul>
  </div>
 
</div>


  </div>
</div>
      </div>
      <div className="container">

<img class="img-fluid "  src={process.env.PUBLIC_URL + '/image/image 20.png'} />  
      </div>
      






      <div className="textl-right p-2">
          <div className=" rounded-circle pbcolor pt-1 float-right" style={{width:"5rem" , height:"5rem"}}>
         
          <img src={process.env.PUBLIC_URL + "/icons/chat.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>
           
          </div>
          </div>

    </div>
  )
}

export default Contact