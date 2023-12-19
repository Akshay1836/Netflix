import React, { useState } from "react";
import "./Banner.css";
import {Apikey,imageurl} from "../constants/constants"
import axios from "../axios";
import { useEffect } from "react";

function Banner() {
    const [movie, setMovie] = useState()


    useEffect(() => {
      
    axios.get(`trending/all/week?api_key=${Apikey}&language=en-US'`).then((response)=>{
        console.log(response.data.results[2]);
        var a=Math.floor(Math.random() * 10) + 1;
        
        setMovie(response.data.results[a])
    })
      
    }, [])
    
  return (
    <div className="banner" style={{backgroundImage:`URL(${movie? imageurl+movie.backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{movie?(movie.title || movie.name) :""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
        {movie?movie.overview:""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
