import React, { useState } from 'react'

function Datascience() {
    const shopcard = [
        {   img: './img/Data analyticc using pandas.webp ',
    
        product: ' Data analyticc using pandas',
          
        },
        {img:'./img/Data analyticc using pandas.webp',
          product: 'python',
          
        },
        {img:'./img/data visualization in python.webp',
          product: 'data visualization in python',
           
        },
        {img:'./img/introduction to datascience.webp',
          product: 'introduction to datascience',
          
        },
        {img:'./img/Machine learning 101.webp',
          product: ' Machine learning 101',
           
        },
        {img:'./img/Machine learning 101.webp',
          product: 'Machine learning wthe python',
           
        },
      
        
        
      ];
    
      const [isAdded, setIsAdded] = useState(Array(shopcard.length).fill(false));
      const [count, setCount] = useState(0);
    
      const handleAddToCart = (index) => {
        const updatedIsAdded = [...isAdded];
        updatedIsAdded[index] = !updatedIsAdded[index];
        setIsAdded(updatedIsAdded);
        setCount((count) => count + 1);
        const data =  count + 1
        props.ondata(data);
      };
    
      const handleRemoveFromCart = (index) => {
        const updatedIsAdded = [...isAdded];
        updatedIsAdded[index] = false;
        setIsAdded(updatedIsAdded);
        setCount((count) => count - 1);
        const data =  count - 1
        props.ondata(data);
      };
    
      return (
        <div className='container'>
        {shopcard.map((item, index) => (
          <div key={index} className="card">
            <div>
              <img src={item.img} alt={item.product} className="sia" /> {/* Display the image */}
            </div>
            
            <div className='itames'>
              <h4 >{item.product}</h4>
            </div>
           
            
            <div className='itames'>
            {/* {isAdded[index] ? (
              <button onClick={() => handleRemoveFromCart(index)}>
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => handleAddToCart(index)}>
                Add to Cart
              </button>
            )} */}
            </div>
          </div>
        ))}
      </div>
      );
}

export default Datascience