import React, { useState }  from 'react'
import './Card.css'
 




function Card(props) {
  const shopcard = [
    {   img: './img/iphone-14-user-guide.webp',

    product: 'iPhone 14 pro',
      price: '$211',
    },
    {img:'./img/download.jpeg',
      product: 'iPhone 14 max',
      price: '$222',
    },
    {img:'./img/samsung.jpeg',
      product: 'samsung Galaxy Note 20',
      price: '$112',
    },
    {img:'./img/Samsung-Galaxy-S20.jpg',
      product: 'Samsung Galaxy S21',
      price: '$212',
    },
    {img:'./img/one.jpeg',
      product: 'OnePlus 10 Pro',
      price: '$200',
    },
    {img:'./img/OIP.jpeg',
      product: 'OnePlus 11 Pro',
      price: '$122',
    },
    {img:'./img/oneplus.jpeg',
      product: 'OnePlus 12',
      price: '$222',
    },
    {img:'./img/oneplus-10.jpeg',
      product: 'OnePlus 10 Pro 5G',
      price: '$122',
    },
    {   img: './img/ip.jpeg',

    product: 'iPhone 14 pro',
      price: '$222',
    },
    {   img: './img/ip2.jpeg',

    product: 'iPhone 14 pro',
      price: '$212',
    },
    {   img: './img/ip3.jpg',

    product: 'iPhone 14 pro',
      price: '$202',
    },
    {   img: './img/ip4.jpeg',

    product: 'iPhone 14 pro',
      price: '$202',
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
          <img src={item.img} alt={item.product} /> {/* Display the image */}
        </div>
        
        <div className='itames'>
          Product: {item.product}
        </div>
       
        <div className='itames'>
          Price: {item.price}
        </div>
        <div className='itames'>
        {isAdded[index] ? (
          <button onClick={() => handleRemoveFromCart(index)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCart(index)}>
            Add to Cart
          </button>
        )}
        </div>
      </div>
    ))}
  </div>
  );
}

export default Card;