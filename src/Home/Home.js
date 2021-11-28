import { 
    Container,
    makeStyles,
   
    } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchAysncAnime, FetchAysncMovie, FetchAysncShow} from '../Redux/movieSlice';



const Home = () => {
    // Fetching movies
  

// MakeStyle from material-UI
const useStyle =  makeStyles(()=>{
    return({
    
    })
})
const classes = useStyle();
// React-component
    return (
        <>
        Hello This is  Home Page
        </>
    )
}

export default Home
