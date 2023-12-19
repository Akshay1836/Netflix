import React, { useEffect } from 'react'
import "./Rowposter.css"
import { useState } from 'react'
import axios from '../axios'
import { Apikey,imageurl } from '../constants/constants'

function Rowposter(props) {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data.results);
            setCard(response.data.results)
          
        })
        // .catch(err=>{
        //     alert("Network Error");
        // }

        // )
    }, [])
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {
                card.map((obj)=>
                   <img src={`${imageurl+obj.backdrop_path}`} alt="poster" className={props.smallposter?"smallposter":'poster'}/>
                )
            }
           
        </div>
    </div>
  )
}

export default Rowposter