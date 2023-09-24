import React,{ createContext, useContext,useState} from 'react'



const ShopContexts = createContext();


function ShopProvider( {children}){
    const [count,setCount]= useState( 0 );
    const [cardcount,setcardCount]= useState( 0 );
    const [countA,setCountA]= useState( 0 );
    return (
        <ShopContexts.Provider value={{count, setCount ,cardcount,setcardCount,countA,setCountA }}>
            {children}
        </ShopContexts.Provider>
    );
}

export {ShopContexts,ShopProvider}