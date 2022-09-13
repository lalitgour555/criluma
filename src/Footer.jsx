import React from 'react'

const Footer = () => {
  return (
    <div className='p-4' style={{background:"#00A6DB"}}>
<h1 className='font-family  text-left h1 p-3 btncolor m-0' >We look forward to welcoming you!</h1>



<div className='row '>
<div className='col-sm-5 text-center p-2 '> 
<div className='d-flex' >
<i class="bi bi-geo-alt mr-2" style={{color:"white"}}></i>
<p >Via Sandro Totti, 2 60131 Ancona (AN)</p>
    </div>
    <div className='d-flex' >
<i class="bi bi-geo-alt mr-2" style={{color:"white"}}></i>
<p >071.9945580</p>
    </div>
  
    <div className='d-flex'>
    <i class="bi bi-envelope mr-2" style={{color:"white"}}></i>
<p >info@crilumaviaggi.com</p>
    </div>
    <div  className='d-flex'>
<i class="bi bi-geo-alt mr-2" style={{color:"white"}}></i>
<p >P.Iva: 02590540429</p>
    </div>

</div>
<div className='col-sm-4 text-left '>
    <ul className='listynone'>
        <li>Liste nozze </li>
        <li>Tours </li>
        <li>Vacanze studio</li>
        <li>INPSieme</li>
        <li>Cataloghi</li>
        <li>Pagamenti accettati</li>
     
        <img src={process.env.PUBLIC_URL + "/icons/payment.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

    </ul>

    </div>
<div className='col-sm-3 '>
   
    <h1 className='h1 newp'> NEWSLATTER </h1>

    <div class="input-group mb-3 " >
  <input type="text" class="form-control inputb"  placeholder="EMAIL" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <i class="bi bi-send" style={{  background:"#003756",width:"3rem" , fontSize:"2rem", color:"aliceblue"}}></i>

</div>
    <div className='btncolor' >
        FOLLOW US
    </div>
    <div className='d-flex justify-content-center' >
    <i class="bi bi-facebook btncolor p-3 fonSioc"></i>
    <i class="bi btncolor bi-youtube p-3 fonSioc"></i>
    <i class="bi btncolor bi-instagram p-3 fonSioc"></i>
    {/* <img className='p-2 ' src={process.env.PUBLIC_URL + "/icons/face.png"}  style={{width:"3.5rem"}}  alt="Cinque Terre"/>
    <img  className='p-2 mat-1' src={process.env.PUBLIC_URL + "/icons/youtub.png"}  style={{width:"4rem"}}  alt="Cinque Terre"/>
    <img className='p-2' src={process.env.PUBLIC_URL + "/icons/instagra.png"}  style={{width:"4rem"}}  alt="Cinque Terre"/> */}

    </div>
    
</div>

</div>


    </div>
  )
}

export default Footer