import React from 'react'
import './nav.css'
import request from './request'

function Nav({setoption}) {
    return (
        <div className="nav">

           <h2 onClick={()=>setoption(request.fetchTrending) }>Trending</h2>

           <h2 onClick={()=>setoption(request.fetchTopRated) }>Top-rated</h2>


            <h2 onClick={()=>setoption(request.fetchActionMovies) }>Action</h2>

            <h2 onClick={()=>setoption(request.fetchRomanceMovies) }>Romance</h2>

            <h2 onClick={()=>setoption(request.fetchComedyMovies) }>Comedy</h2>

            <h2 onClick={()=>setoption(request.fetchSciFiMovies) }>Science-Fiction</h2>


            <h2 onClick={()=>setoption(request.fetchHorrorMovies) }>Horror</h2>

            <h2 onClick={()=>setoption(request.fetchAnimationMovies) }>Animation</h2>

           

           
           
            
        </div>
    )
}

export default Nav
