import React from 'react';
import './SubHomePage.css';

const SubHomePage = (props) => {
    console.log(props)
    const {_id, imageURL, name} = props.productAttribute;
    return (
        <div className="sub-home-page">
          <img src={imageURL} style={{width: '50%'}} alt=""/>
          <h4>{name?.name}</h4>
            <p>${name?.price}</p>
            <p>{name?.wight} gm</p>
            <button className="main-button">Buy Now</button>
        </div>
    );
};

export default SubHomePage;