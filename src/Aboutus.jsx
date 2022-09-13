import React from 'react'

const Aboutus = () => {
  return (
    <div>
 
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img style={{ width:"100%" , height:""}}  src={process.env.PUBLIC_URL + '/image/reiseuhu-5SOTm1RlCmg-unsplash.png'} />  
    </div>
  
 
</div>
<div className='container p-4'>
<h1>ABOUT US</h1>
<p>Life is a palette of colors it is up to you to decide the shades. Everyone has to draw his own world.</p>
<div class="progress d-inline-flex proghe" style={{width:"rem"}}>
  <div class="progress-bar pbcolor  p-3" role="progressbar" aria-valuenow="0" aria-valuemin="0"  style={{width:"100%"}} aria-valuemax="">
  <img src={process.env.PUBLIC_URL + "/icons/r.png"}  style={{width:"4.5rem"}}  alt="Cinque Terre"/>

  </div>
</div>
<div className='row  '>
  <div className="col-sm-7  text-left">
    <div className='p-2'>

 
    <p>It is a pleasure for us to be here to introduce ourselves and our country. In our region, Marche, we are by far the best known and most structured reality both in terms of customers and, consequently, in terms of revenues. 
First of all let’s give you, symbolically, a welcome to our country, the one the whole world calls "the beautiful country", welcome to the open-air museum of Europe, welcome to the country of artists, inventors and saints...welcome to Italy!
Any part of Italy is wonderful to be discovered, but there is one region that can leave you truly breathless: Marche.</p>
  </div>
  <div className='p-2'>
    <p> Our agency has unique features in our territory, we can organise travel according to the purpose: study travel, work travel, holidays, cultural travel, natural experience, shopping journeys, etc. We are also specialize in planning weddings and weddings travels in Italy or in our region taking care of everything from A to Z.</p>
  </div>
  </div>
  <div className="col-sm-5   p-4">
  <img className='img-fluid' src={process.env.PUBLIC_URL + '/image/criluma.png'} />
    
  </div>
<div >
  <p className='text-left'>The famous guide Lonely Planet has ranked Italy 2nd in the top 10 most beautiful and fascinating places to visit, right after the evocative tour along the Silk Road, in Central Asia.
Green hills, endless vineyards, beautiful beaches, enchantingwoods, cities of art and ancient villages are all around.
Thanks to Criluma, you will be able to get to know cities that willsteal your heart, such as Urbino, an enchanting picturesque Renaissance village located in the north of the region, which still retains the atmosphere of one of the brightest periods for Italian art and culture, celebrating the 500th anniversary of the death of its most famous citizen, Raffaello.
However, Urbino is just one of the many wonders that the Marche region boasts. Among the most popular destinations are the Frasassi Caves, near the town of Genga: an extensive underground system of karst caves where you can admire the gigantic sculptures created by nature, known as stalactites and stalagmites. Moreover, the beautiful Loreto, a religious and spiritual landmarkpar excellence, a Marian pilgrimage destination known worldwidefor its majestic Basilica.
In addition, during the summer, the Marche coast offers countlessbeautiful beaches, where you can relax and have fun in the crystal clear water of the Adriatic Sea. Among the most beautifulattractions, there are certainly Sirolo and Numana, sitting in thepromontory of Monte Conero.
The south of the Marche Region is full of breathtaking landscapes, centuries-old traditions, myths and legends. The Red Blades can be considered as the Grand Canyon of the Marche Region, one of the most fascinating and well-known places on the SibilliniMountains. A 7-km-long itinerary that will take you up close to see wonderful rock formations with pinnacles and towers. The area of the Sibillini Mountains National Park is defined by many as magical and wild: legend has it, in fact, that there lies the kingdom of the mythical Sibyl. The places across the border of the Marche and Umbria regions are rich in ancient myths and legendsas well, adding to the evocativeness of attractions such as the cave of Sibilla and Pilate’s lake, the only natural lake in the entire region. A unique habitat where many animal and vegetable species, nowhere else to be found, coexist, such as a small and rare crustacean, which gives water its typical reddish nuance.
All around the Marche region there are companies that have produced food and wine products for centuries. Moreover, there are true districts of handcrafted products such as shoes in the province of Fermo, hats in the enchanting area of Montappone and then bags, tailored objects and furnishings in the Pesaro area. The food and wine and handicrafts of the Marche Region have always been renowned and nationally certified as products of Italian excellence.
The Marche region awaits you with its culture, art, history, tradition, fashion, adventure, food and unpolluted nature. At Criluma, a national landmark for tourism based in the Marche region, we look forward for you to discover our region at its best.
For further information, contact us at: info@crilumaviaggi.com
Thank you very much for your attention.
</p>
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

export default Aboutus