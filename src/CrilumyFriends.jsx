import React from 'react'
import ImageHover from './ImageHover'
import { Link } from 'react-router-dom'
const CrilumyFriends = () => {
  return (
    <div>
      <ImageHover/>  
      
     

      <div className="row  p-4">
     <div class="card text-color desbgcolor  ">
    </div> 
    <div className="col-sm-3 m-5 p-1  caResp">
          <div class="card text-color b-none ">
            <div class="card-body p-0">
            
      <div className=" m-3">
        <ul class="list-group text-left br-none">
          <li class="list-group-item pbcolor fs-4 text-center text-white text1">CRILUMY</li>
          <li class="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
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
          <li class="list-group-item">
            <div className="row  ">
              <div className="col-sm-2 text-right">
                <img
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
          <li class="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
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
          <li class="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
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
          <li class="list-group-item">
            <div className="row ">
              <div className="col-sm-2 text-right">
                <img
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
  <div className="row  ">
    <div className=" col-sm p-2  ">
  
    
  <input   placeholder='Name'/>
  
  

    
    </div>
    <div className=" col-sm p-2 ">
      <div className='d-flex'>
    <div class="input-group mb-3">
  <select class="form-select text-color" id="inputGroupSelect01">
    <option  selected>TYPO OF TRAVELER</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div> 
    </div>
    </div>
    <div className=" col-sm p-2">
      <div className='d-flex'>
    <div class="input-group mb-3">
  <select class="form-select text-color" id="inputGroupSelect01">
    <option selected>FOR LOCATION</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div> 
    </div>
    </div>
  
  </div> 
    
     <div className="text-right ml-2">
                <button
                    type="button"
                    class="btn btn-primary btn-lg br-none pbcolor m-2"
                     
                  >
                    SEARCH
                  </button>
                </div> 
                <div className=" col-sm-4 caResp3 pb-3 " >
    <div class="card ali-center text-color bSize p-3 " >
    <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={process.env.PUBLIC_URL + "/image/Ellipse 5.png"}
                        class="rounded-circle p-2"
                        alt="Cinque Terre"
                      />  
    <div class="card-body">
    <h1>Lorem ipsum</h1>
    <h3>Sardegna</h3>
    <p>Type of traveler: adventure</p>
  </div>
  <div className="row">
  <div className="col">  <img src={process.env.PUBLIC_URL + '/icons/add 1.png'} /> 
</div>
<div className="col">  <img src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
  </div>
</div>
</div>
<div className=" col-sm-4 caResp3   pb-3 " >
<div class="card ali-center text-color bSize p-3 " >
    <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={process.env.PUBLIC_URL + "/image/Ellipse 6.png"}
                        class="rounded-circle p-2"
                        alt="Cinque Terre"
                      />  
    <div class="card-body">
    <h1>Lorem ipsum</h1>
    <h3>Sardegna</h3>
    <p>Type of traveler: adventure</p>
  </div>
  <div className="row">
  <div className="col">  <img src={process.env.PUBLIC_URL + '/icons/add 1.png'} /> 
</div>
<div className="col">  <img src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
  </div>
</div>
</div>        
        <div className=" col-sm-4 caResp3   pb-3 " >
        <div class="card ali-center text-color bSize p-3 " >
    <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={process.env.PUBLIC_URL + "/image/Ellipse 7.png"}
                        class="rounded-circle p-2"
                        alt="Cinque Terre"
                      />  
    <div class="card-body">
    <h1>Lorem ipsum</h1>
    <h3>Sardegna</h3>
    <p>Type of traveler: adventure</p>
  </div>
  <div className="row">
  <div className="col">  <img src={process.env.PUBLIC_URL + '/icons/add 1.png'} /> 
</div>
<div className="col">  <img src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
  </div>
</div>
</div>
<div className=" col-sm-4 caResp3   pb-3 " >
<div class="card ali-center text-color bSize p-3 " >
    <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={process.env.PUBLIC_URL + "/image/Ellipse 8.png"}
                        class="rounded-circle p-2"
                        alt="Cinque Terre"
                      />  
    <div class="card-body">
    <h1>Lorem ipsum</h1>
    <h3>Sardegna</h3>
    <p>Type of traveler: adventure</p>
  </div>
  <div className="row">
  <div className="col">  <img src={process.env.PUBLIC_URL + '/icons/add 1.png'} /> 
</div>
<div className="col">  <img src={process.env.PUBLIC_URL + '/icons/send.png'} /> 
</div>
  </div>
</div>
</div>  
      </div>
     </div>     
  </div>
        <div className="textl-right p-2">
          <div className=" rounded-circle pbcolor pt-1 float-right" style={{width:"5rem" , height:"5rem"}}>
         
          <img src={process.env.PUBLIC_URL + "/icons/chat.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>
           
          </div>
          </div>
    </div>
  )
}

export default CrilumyFriends