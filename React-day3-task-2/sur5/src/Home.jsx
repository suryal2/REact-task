import React, { useState }  from 'react'
import './Home.css'
import Card from './Card'
 
function Home(    ) {
 
  const [receivedData,setRec]=useState("");
  const handleDataFromChild =(data)=>{
    setRec(data);
  }
  return (
 <>
   <div className='nav'>
        <div className='container'>
          <div className='logo'>Amazon plus</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a className="sur sur-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
            </li>
          </ul>
          <button className="shopCard"> <i className="fa fa-shopping-cart" aria-hidden="true"></i>Card {receivedData}  </button>
        </div>
      </div>
      <div className='off'>
        <h2>Summer sale offer</h2>
         <div className='container-md'> Explore Your One-Stop-Shop For All Your Requirements. Shop Online Today! Enhance Your Shopping Experience With Our Personalised Recommendations. Huge Selection. Best Deals. Low Prices. Top Brands. Easy & Fast Delivery. Great Offers. No Cost EMI Available. </div> 
      </div>


      <div className=' cards'>
        <div className='container-sm'>
          <Card ondata={handleDataFromChild}  ></Card>
            
        </div>
      </div>
 </>
  )
}

export default Home