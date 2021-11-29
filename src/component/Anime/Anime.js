import {
     Container, 
     makeStyles,
     Grid,
     CardActionArea,
     CardMedia,
     CardContent,
     Typography,
     Card,
     Button,
     Input
    } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { FetchAysncAnime, getallAnimes } from '../../Redux/movieSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





const useStyle = makeStyles((theme)=>{
    return{
input:{
    background:"white",
},
gridContainer:{
    marginTop:30
},
form:{
    display:"flex",
    marginTop:30
},

    }
});




const Anime = () => {
    
    // dispatch
    const dispatch = useDispatch();
    // Hook
    const [searchText, setsearchText] = useState('');
    // Fetching Anime
    useEffect(() => {
        const searchText="One piece"
      dispatch(FetchAysncAnime(searchText));
        
    }, [dispatch]);
    // Function
    const submitHandle = (e)=>{
        if(searchText===""){
            return alert("Please Type Someting in the Box")
        }
        e.preventDefault();
        dispatch(FetchAysncAnime(searchText))
    }

    const classes = useStyle();
    // useSelector
    const animes = useSelector(getallAnimes)
    return (
   
        <Container>
            {/* BackGround Image*/}
            <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image='https://c4.wallpaperflare.com/wallpaper/981/482/476/anime-4k-image-download-hd-wallpaper-preview.jpg'
          alt="background-image"
        />
        </CardActionArea>
        </Card>
            {/* background Iamge */}
            <form onSubmit={submitHandle} className={classes.form}>
            <Input
            className={classes.input}
            color="secondary"
            fullWidth
            value={searchText} 
            onChange={(e)=>{setsearchText(e.target.value)}}
            />
            <Button variant="contained" color="secondary" type="submit">
                Search
            </Button>
            </form>
            {/* If animes is Null this will not be showed*/}
            <Grid container spacing={3} className={classes.gridContainer}>
             {animes.map(anime=>(
                 <Grid item 
                 key={anime.mal_id}
                 xl={4}
                 lg={4}
                 md={4}
                 sm={6}
                 xs={12}
                 >
            <Link to={`component/anime/${anime.mal_id}`} style={{textDecoration:"none"}}>
          <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={anime.image_url}
          alt={anime.title}
        />
        <CardContent>
          <Typography  variant="h6" component="p">
            {anime.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
                 </Grid>
             ))}
            </Grid> 
      
        
        
        </Container>
    )
}

export default Anime
