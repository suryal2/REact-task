import React, { useContext, useEffect } from 'react';
import { ShopContexts } from './ShopContexts';
import data from './data.json';
import './CardF.css';


function CardF() {
    const { count, setCount } = useContext(ShopContexts);
    const { cardcount,setcardCount } = useContext(ShopContexts);
    const { countA, setCountA } = useContext(ShopContexts);
  
    const priceIncrease = (itemPrice, itemId) => {
      const updatedItemPrices = { ...count };
      updatedItemPrices[itemId] =Math.min( (updatedItemPrices[itemId] || 0) + itemPrice ,100000 )
      setCount(updatedItemPrices);

       
      setCountA(countA + itemPrice);
      
      const updatedItemPrices1 = { ...cardcount };
      updatedItemPrices1[itemId] =  Math.min((updatedItemPrices1[itemId] || 0) + 1, 100);
      setcardCount(updatedItemPrices1); 

    };
  
  
    const priceDecrease = (itemPrice, itemId) => {
      const updatedItemPrices = { ...count };
      if (updatedItemPrices[itemId] && updatedItemPrices[itemId] > 0) {
        updatedItemPrices[itemId] -= itemPrice;
        setCount(updatedItemPrices);
      }
  
  
  
      const updatedItemPrices1 = { ...cardcount };
      updatedItemPrices1[itemId] = Math.max((updatedItemPrices1[itemId] || 0) - 1, 0);
  
      setcardCount(updatedItemPrices1); 

      setCountA(countA - itemPrice);
    };
  
  
    const cardDelete = (itemId) => {
  
      const updatedItemPrices = { ...count };
      delete updatedItemPrices[itemId];
      setCount(updatedItemPrices);
  
      const updatedItemPrices1 = { ...cardcount };
      delete updatedItemPrices1[itemId];
      setcardCount(updatedItemPrices1);
    };
  
  
    return (
      <div>
        <div>
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className='flex'>
                <img src={item.thumbnail} alt='' />
                <ul>
                  <li>
                    <p>{item.title}</p>
                    <p>price:{item.price}</p>
                    <div className='des'>{item.description}</div>
  
                  </li>
                </ul>
                <li className='li1'>
                  <div>
                    <button className='sub' onClick={() => priceDecrease(item.price, item.id)}> -</button>
  
                    {cardcount[item.id] || 0}
  
  
                    <button type="button" onClick={() => priceIncrease(item.price, item.id)} className='Add'>+</button>
                    <span>Price:  {count[item.id] || 0}</span>
                  </div>
                  <button className='remove' onClick={() => cardDelete(item.id)} text="remove">remove</button>
                </li>
  
  
  
              </div>
              {/* <button className='remove' onClick={() => cardDelete(item.id)} text="remove">remove</button> */}
              <div className="subtotel">
  <p>SUBTITLE<strong className='strongA'>${count[item.id] || 0}</strong></p>
  <p>SHIPPING<strong className='strongA'>FREE</strong> </p>
              </div>
              <div className='strongB'>
  <strong >TOTAL<strong className='strongA'>$ {count[item.id] || 0}</strong></strong>
              </div>
            </div>
          ))}
        </div>
        TOTEL AMOUNT:{countA}
      </div>
    );
  }
export default CardF