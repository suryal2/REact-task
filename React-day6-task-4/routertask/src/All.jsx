import React, { useState } from 'react'
import './All.css'
function All() {
  const shopcard = [
    {   img: './img/blockchain.webp ',
    
    product: 'Blockchain',
      
    },
    {img:'./img/cyber security & ethical hacking for beginners.webp',
      product: 'Cyber security & ethical hacking for beginners',
      
    },
    {   img: './img/angular.webp',

    product: ' Angular',
      
    },
    {   img: './img/Data analyticc using pandas.webp ',
    
    product: ' Data analyticc using pandas',
      
    },
    {img:'./img/angular.webp',
      product: 'CSS',
      
    },
    {img:'./img/data visualization in python.webp',
      product: 'data visualization in python',
       
    },
    {img:'./img/angular.webp',
      product: 'CSS',
      
    },
    {img:'./img/Data analyticc using pandas.webp',
    product: 'Data analyticc using pandas',
     
  },
  {img:'./img/introduction to datascience.webp',
    product: 'introduction to datascience',
    
  },
    {img:'./img/angular.webp',
      product: 'CSS8',
       
    },
    {   img: './img/mongodb.webp ',
    
    product: 'Mongodb',
      
    },
    {img:'./img/sql.webp',
      product: 'SQL',
      
    },
    {img:'./img/sqlite.webp',
      product: 'Sqlite',
       
    },
   
  
    {img:'./img/angular.webp',
      product: 'CSS Animation English',
      
    },
    {img:'./img/angular.webp',
      product: ' HTML',
       
    },
    {img:'./img/introduction to datascience.webp',
          product: 'introduction to datascience',
          
        },
        {img:'./img/Machine learning 101.webp',
          product: ' Machine learning 101',
           
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
        {img:'./img/Machine learning 101.webp',
          product: 'Machine learning wthe python',
           
        },
    {img:'./img/angular.webp',
      product: 'HTML5',
       
    },
    {img:'./img/angular.webp',
      product: 'React',
       
    },
    {img:'./img/cyber security & ethical hacking for beginners.webp',
    product: 'cyber security & ethical hacking for Advances',
     
  },
  {img:'./img/cyber security & ethical hacking for beginners.webp',
    product: ' intro to hacking',
     
  },
    {img:'./img/angular.webp',
      product: ' NodeJS',
      
    },
    {   img: './img/angular.webp',

    product: 'HTML IN TAMIL',
       
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
          <h4 classNme="title" >{item.product}</h4>
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

export default All