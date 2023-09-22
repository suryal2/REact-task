import React, { useState } from 'react'

function Database() {
    const shopcard = [
        {   img: './img/mongodb.webp ',
    
        product: 'Mongodb',
          
        },
        {img:'./img/sql.webp',
          product: 'SQL',
          
        },
        {img:'./img/sqlite.webp',
          product: 'Sqlite',
           
        },
        {img:'./img/sqlite.webp',
          product: ' MYSQL',
          
        },
        {img:'./img/sqlite.webp',
          product: ' Microsoft MYSQL',
           
        },
        {img:'./img/mongodb.webp',
          product: 'Oracical',
           
        },
      
        
        
      ];
    
      const [isAdded, setIsAdded] =   useState(Array(shopcard.length).fill(false));
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

export default Database