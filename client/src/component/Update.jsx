import { useState } from "react";
import axios from "axios";

import { Link,useLocation, useNavigate } from "react-router-dom";
//update movie by all;
const Update =()=>{

const [movie,setMovie] =useState({
title:"",
desc:"",
price:null,
cover:"",
});

const navigate =useNavigate();
const location =useLocation();

const movieId =(location.pathname.split("/")[2])



const handleChange = (e) => {
    setMovie(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async e =>{
e.preventDefault()
try{        
    await axios.put("http://localhost:8800/movies/"+ movieId, movie)
    navigate('/')
}catch(err){
console.log(err);
}
  };
  console.log(movie);

    return(
        <div className="form">
            <h1>Update  Movie</h1>
            <input type="text" placeholder="title"onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc" onChange={handleChange} name="desc"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>

            <button onClick={handleClick}>Update</button>
             
      <Link to="/">See all books</Link>
        </div>
    )
}



export default Update