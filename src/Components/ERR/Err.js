import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AdminSection = () => {
    const [imgURL, setImgURL] = useState(null);
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {

        const eventData = {
            name: data,
            imgURL: imgURL

        }

     const url = `http://localhost:4040/addProductTypeOne`;
     fetch(url, {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
            },
        body: JSON.stringify(eventData)
     })
     .then(res => console.log('server side response'))

    }
  
const handleDataUpload = event => {
 
   console.log(event.target.file)
   const imageData = new FormData();
   imageData.set('key', '348d1743005390e93e528e0847a5a40a');
   imageData.append('image', event.target.file[0])


   axios.post('https://api.imgbb.com/1/upload', 
   imageData)
     .then(function (response) {
         console.log(response);
       console.log(response.data.data.display_url);
       setImgURL(response.data.data.display_url);
     })
     .catch(function (error) {
       console.log(error);
     });
   

}

    return (
        <div>
            <h1>hello word</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name"  placeholder="Enter The Name" ref={register} className="input-style" /> <br/>
      <input name="wight" placeholder="Enter The Wight" ref={register} className="input-style"/> <br/>
      <input name="price" placeholder="Enter The Price" ref={register} className="input-style"/> <br/>
      <input name="made"  placeholder="made in" ref={register} className="input-style" /> <br/>
      <input type="file" onChange={handleDataUpload} className="input-style fa fa-cloud-upload" aria-hidden="true"  /> <br/> <br/>
      <input type="submit" className="submit-btn-style"/>
    </form>
        </div>
    );
};

export default AdminSection;