import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import './header.css'

function Header() {
    return (
        <div className="header">
           <div className="headericons">

               <div className="headericon  headericon--active">
                   <HomeIcon/>
                   <p>Home</p>

               </div>

               <div className="headericon">
                   <FlashOnIcon/>
                   <p>Trending</p>
               </div>

               <div className="headericon">
                   <LiveTvIcon/>
                   <p>Verfied</p>
               </div>

               <div className="headericon">
                   <VideoLibraryIcon/>
                   <p>Collections</p>
               </div>


               <div className="headericon">
                   <SearchIcon/>
                   <p>Search</p>
               </div>

               <div className="headericon">
                   <PersonOutlineIcon/>
                   <p>Account</p>
               </div>


           </div>

           <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="hulu"/>
            
        </div>
    )
}

export default Header
