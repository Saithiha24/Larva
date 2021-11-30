import React,{useEffect} from 'react'
import AnimeSlide from './AnimeSlide'
import { useDispatch, useSelector } from 'react-redux';
import { FetchAysncTopAnime, getallTopAnimes } from '../Redux/movieSlice';


const Home = () => {
const dispatch = useDispatch();
  useEffect(() => {
  dispatch(FetchAysncTopAnime())
  }, [dispatch]);


  const topanimes = useSelector(getallTopAnimes);
    return (
        <div>
            <AnimeSlide  animes={topanimes}/>
        </div>
    )
}

export default Home

