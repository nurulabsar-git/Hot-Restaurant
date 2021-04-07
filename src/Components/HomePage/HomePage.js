import React, { useEffect, useState } from 'react';
import SubHomePage from '../SubHomePage/SubHomePage';

const HomePage = () => {
const [products, setProducts] = useState([])

useEffect(()=> {
  fetch('http://localhost:9000/getProduct')
  .then(result => result.json())
  .then(data => setProducts(data))

}, [])


    return (
        <div>
            <h1>This is home page</h1>
           {
               products.map(pd => <SubHomePage productAttribute = {pd}></SubHomePage>)
           }
        </div>
    );
};

export default HomePage;