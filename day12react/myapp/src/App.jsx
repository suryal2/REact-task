 
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './counterSlice';
import { increment as incrementCard, decrement as decrementCard, reset as resetCard } from './CardSlice';
import { increment as incrementTotalprice, decrement as decrementTotalprice, reset as resetTotalprice } from './Totalprice';
import './App.css'
import data from './data.json';

function App() {
  const dispatch = useDispatch();
  const dispatchA = useDispatch();
  const count = useSelector((state) => state.counter); // Make sure the slice name is correct
  const countA = useSelector((state) => state.cardcount); // Make sure the slice name is correct
  const countT = useSelector((state) => state.counterY);

  const priceIncrease = (itemPrice, itemId) => {
    // Dispatch an action to increment the item price
    dispatch(increment({ itemId, amount: itemPrice }));
    dispatchA(incrementCard({ itemId }));
    dispatch(incrementTotalprice({    amount: itemPrice  }));
  };

  const priceDecrease = (itemPrice, itemId) => {
    
    dispatch(decrement({ itemId, amount: itemPrice }));
    dispatchA(decrementCard({ itemId }));
    dispatch(decrementTotalprice({     amount: itemPrice }));
  };

  const cardDelete = ( itemId) => {
   
    dispatch(reset({ itemId  } ));
    dispatchA(resetCard({ itemId }));
    
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

                  {countA[item.id] || 0}  
<button type="button" onClick={() => priceIncrease(item.price, item.id)} className='Add'>+</button>
            <span>Price: {count[item.id] || 0}</span>
                </div>
                <button className='remove' onClick={() => cardDelete(item.id)} text="remove">remove</button>
              </li>



            </div>
             
            <div className="subtotel">
<p>SUBTITLE<strong className='strongA'>${count[item.id] || 0}</strong></p>
<p>SHIPPING<strong className='strongA'>FREE</strong> </p>
            </div>
            <div className='strongB'>
<strong >TOTAL<strong className='strongA'>$ {count[item.id] || 0}</strong></strong>
            </div>
          </div>
        ))}
      </div >
     <p className='ta'> TOTEL AMOUNT:{countT}</p>
    </div>
  );
}

export default App
