import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Movies =()=>{
    const [movies,setMovies]=useState([])

    useEffect(()=>{
    const fetchAllMovies = async()=>{
    try{
    const res= await axios.get("http://localhost:8800/movies")
    setMovies(res.data);
    }catch(err){
        console.log(err);
    }
    
    }
    fetchAllMovies()
    
    }, [])



    return <div>
        <h1>My Favorite Movies</h1>
<div className="movies">
{movies.map(movie=>(
<div className="movie">
{movie.cover&&<img src={movie.cover} alt="" />}
<h2>{movie.title}</h2>
<p>{movie.desc}</p>

</div>
))}


</div>


        </div>;
    
};



export default Movies