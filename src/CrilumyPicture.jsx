import React from 'react'
import { Link } from 'react-router-dom'
// import CrilumyHeader from './CrilumyHeader'
import ImageHover from './ImageHover'
const CrilumyPicture = () => {
  return (
    <div>
       
       <ImageHover/> 
{/* <CrilumyHeader/>   */}


<div className="row  p-4">
     <div className="card text-color desbgcolor  ">
    </div> 
    <div className="col-sm-3 m-5 p-1  caResp">
          <div className="card text-color b-none ">
            <div className="card-body p-0">
            
      <div className=" m-3">
        <ul className="list-group text-left br-none">
          <li className="list-group-item pbcolor fs-4 text-center text-white text1">CRILUMY</li>
          <li className="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img alt="img_alt_text"
                  className="mat-1 icwh"
                  src={process.env.PUBLIC_URL + "/icons/3.png"}
                />
              </div>
              <div className="col-sm-10  text-left">
                <Link
                  to="/crilumyproduct"
                  className="navbar-brand text-left"
                >
                  {" "}
                  <h4 className="text-color">Destination</h4>
                </Link>{" "}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row  ">
              <div className="col-sm-2 text-right">
                <img
                alt="img_alt_text"
                  className="mat-1 icwh"
                  src={
                    process.env.PUBLIC_URL + "/icons/image-gallery 1.png"
                  }
                />
              </div>
              <div className="col-sm-10 text-left">
                <Link
                  to="/crilumypicture"
                  className="navbar-brand text-left"
                >
                  <h4>Pictures of your travels</h4>
                </Link>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
                alt="img_alt_text"
                  className="mat-1 icwh"
                  src={process.env.PUBLIC_URL + "/icons/network 1.png"}
                />
              </div>
              <div className="col-sm-10  text-left ">
                <Link
                  to="/crilumyfriends"
                  className="navbar-brand text-left"
                >
                  {" "}
                  <h4> Find your friends</h4>
                </Link>
              </div>{" "}
            </div>
          </li>
          <li className="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
                alt="img_alt_text"
                  className="mat-1 icwh"
                  src={process.env.PUBLIC_URL + "/icons/edit 1.png"}
                />
              </div>
              <div className="col-sm-10 text-left">
                <Link to="/product" className="navbar-brand text-left">
                  <h4>Edit Profile</h4>
                </Link>
              </div>{" "}
            </div>
          </li>
          <li className="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img alt="img_alt_text"
                  className="mat-1 icwh"
                  src={process.env.PUBLIC_URL + "/icons/logout 1.png"}
                />
              </div>
              <div className="col-sm-10 text-left">
                {" "}
                <h4>Logout </h4>
              </div>{" "}
            </div>
          </li>
        </ul>
      </div>

            </div>
          </div>
        </div> 

        <div className="col-sm-8 caResp container p-1 ">
      <div className="row   ">
      <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 61.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 62.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 64.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 65.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
        
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 66.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 67.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
          
        </div>
        <div className="col-sm-4 caResp3">
    
    <div className="card m-2 bSize br-none p-2 " >
    <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 68.png'} />    <div className="card-body">
         <div className="d-flex row">
    
    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
    </div>
    <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
    </div>
    </div>
    <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
    </div>
    </div> 
        
        </div>
        
      </div>
     </div> 
  </div>










         {/* <div className="row p-4">
         <div className="container col-sm-3 p-2  ">
          
          <ul className="list-group text-left">
            <li className="list-group-item pbcolor fs-4 text-center text-white">CRILUMY</li>
            <li className="list-group-item">
              <div className="row ">
              <div className='col-sm-2 text-right'>
            <img alt="img_alt_text" className='mat-1 icwh' src={process.env.PUBLIC_URL + '/icons/3.png'} />  
              </div>
          <div className='col-sm-10  text-left'> 
          <Link  to="/crilumyproduct"className="navbar-brand text-left">  <h4 className='text-color'>Destination</h4>
          </Link> </div>
            </div>
             </li>
             <li className="list-group-item">
              <div className="row ">
              <div className='col-sm-2 text-right'>
            <img alt="img_alt_text" className='mat-1 icwh'   src={process.env.PUBLIC_URL + '/icons/image-gallery 1.png'} />  
          
              </div>
          <div className='col-sm-10 text-left'> 
          <Link  to="/crilumypicture"className="navbar-brand text-left"><h4> Pictures of your travels</h4>
          </Link>
          </div> </div>
             </li>
             <li className="list-group-item">
              <div className="row ">
              <div className='col-sm-2 text-right'>
            <img alt="img_alt_text" className='mat-1 icwh'   src={process.env.PUBLIC_URL + '/icons/network 1.png'} />  
              </div>
          <div className='col-sm-10  text-left '> 
          <Link  to="/crilumyfriends"className="navbar-brand text-left">  <h4> Find your friends</h4>
          </Link>
          
           </div> </div>
             </li>
             <li className="list-group-item">
              <div className="row ">
              <div className='col-sm-2 text-right'>
            <img alt="img_alt_text" className='mat-1 icwh'  src={process.env.PUBLIC_URL + '/icons/edit 1.png'} />  
          
              </div>
          <div className='col-sm-10 text-left'>  <h4>Edit Profile </h4></div> </div>
             </li>
             <li className="list-group-item">
              <div className="row ">
              <div className='col-sm-2 text-right'>
            <img alt="img_alt_text" className='mat-1 icwh'   src={process.env.PUBLIC_URL + '/icons/logout 1.png'} />  
          
              </div>
          <div className='col-sm-10 text-left'>  <h4>Logout </h4></div> </div>
             </li>
           
           
          
          </ul>
                      
          
          </div>

<div className="col-sm-8 ">

<div className="container">
  <div className="row align-items-start">
    <div className="col-sm-4">
    
<div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 61.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
      
    </div>
    <div className="col-sm-4">
     
      <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 62.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 

    </div>
    <div className="col-sm-4">
      <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
  </div>
  <div className="row align-items-center">
    <div className="col-sm-4 mx-200">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
    <div className="col-sm-4 mx-200">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
    <div className="col-sm-4 mx-200">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
  </div>
  <div className="row align-items-end">
    <div className="col-sm-4">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
    <div className="col-sm-4">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
    <div className="col-sm-4">
    <div className="card m-2 bSize br-none p-2 " >
<img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
     <div className="d-flex row">

<div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
<div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
</div>
</div>
<p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
</div>
</div> 
    </div>
  </div>
</div>

  {/* <div className="row  ">
  <div className="col-sm">

                  <div className="card m-2 bSize br-none p-2 " style={{width: "21rem"}}>
               <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 61.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm-4 ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 62.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm-4 ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 63.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm-4  ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 64.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 
                 <div className="col-sm-4">

                  <div className="card m-2 bSize br-none p-2 " style={{width: "21rem"}}>
               <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 65.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 66.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 67.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 61.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
                 <div className="col-sm  ">

                  <div className="card m-2 bSize br-none p-2" style={{width: "21rem"}}>
                                 <img alt="img_alt_text" style={{ width: "100%" }} src={process.env.PUBLIC_URL + '/image/Rectangle 68.png'} />    <div className="card-body">
                       <div className="d-flex row">

    <div className="col">  <img alt="img_alt_text" style={{ }} src={process.env.PUBLIC_URL + '/icons/like.png'} /> 
     </div>
         <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send1.png'} />
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
 </div>
     <div className="col">  <img alt="img_alt_text" src={process.env.PUBLIC_URL + '/icons/download.png'} /> 
 </div>
 </div>
 <p className='text-left p-2'>Kenya, vibrant colors, long white beaches and a beautiful sea</p>
   </div>
 </div> 
                 </div>
  
  </div> */}
    

 
{/* </div> */}
        {/* </div>   */}
        <div className="textl-right p-2">
          <div className=" rounded-circle pbcolor pt-1 float-right" style={{width:"5rem" , height:"5rem"}}>
         
          <img  src={process.env.PUBLIC_URL + "/icons/chat.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>
           
          </div>
          </div>
    </div>
  )

}

export default CrilumyPicture