import React, { useEffect, useState } from 'react';
import SubHomePage from '../SubHomePage/SubHomePage';
import './HomePage.css'
const HomePage = () => {
const [products, setProducts] = useState([])

useEffect(()=> {
  fetch('http://localhost:9000/getProduct')
  .then(result => result.json())
  .then(data => setProducts(data))

}, [])


    return (
        <div>
         <div className="container">
         <h1>This is home page</h1>
         </div>
          <div className="container">
          {
               products.map(pd => <SubHomePage productAttribute = {pd}></SubHomePage>)
           }
          </div>
        </div>
    );
};

export default HomePage;