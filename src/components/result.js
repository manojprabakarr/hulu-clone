import React,{useState,useEffect} from 'react'
import Card from './card'
import './result.css'
import axios from './axios'
import Flipmove from 'react-flip-move'

function Result({option}) {
    const[movie,setmovie]=useState([])

    useEffect(()=> {

        const Data=async ()=> {
            const response = await axios.get(option)
            setmovie(response.data.results)
            console.log(response)
            return response
        }
        Data();

    },[option])
    return (
        <div className="results">

            <Flipmove>

            {movie.map((movies)=> (
                 <Card  key={movies.id} movies={movies}/>

            ))}
            </Flipmove>
            
           
            
        </div>
    )
}

export default Result
