import React,{ createContext, useContext,useState} from 'react'



const ShopContext = createContext();


function ShopProvider( {children}){
    const [count,setCount]= useState( 0 );
    const [cardcount,setcardCount]= useState( 0 );
    return (
        <ShopContext.Provider value={{count, setCount ,cardcount,setcardCount }}>
            {children}
        </ShopContext.Provider>
    );
}

export {ShopContext,ShopProvider}