import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AdminSection = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
 
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data,
            imageURL: imageURL

        };
        const url =`http://localhost:9000/addProductTypeOne`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData) 
        })
        .then(res => console.log('server side response'))
    };

    const handleDataUpload = event =>{
        
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '348d1743005390e93e528e0847a5a40a');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
              console.log(response);
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
          
        }


    return (
    <div style={{textAlign: 'center'}}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input name="name"  placeholder="Enter The Name" {...register("name")} /> <br/>
      <input name="wight" placeholder="Enter The Wight" {...register("wight")}/> <br/>
      <input name="price" placeholder="Enter The Price" {...register("price")}/> <br/>
      <input name="Shipment"  placeholder="Shipment" {...register("shipment")}/> <br/>
    <input type="file" onChange={handleDataUpload} /> <br/> <br/>
      <input type="submit"/>
    </form>
    
        </div>
    );
};

export default AdminSection;