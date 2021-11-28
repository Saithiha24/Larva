import {
     Container, 
     makeStyles,
     TextField,
     Grid,
     CardActionArea,
     CardMedia,
     CardContent,
     Typography,
     Card,
     Button
    } from '@material-ui/core'

import React,{useEffect,useState} from 'react'
import { FetchAysncAnime, getallAnimes } from '../../Redux/movieSlice';
import { useDispatch,useSelector } from 'react-redux';





const useStyle = makeStyles((theme)=>{
    return{
textField:{
    background:"white",
},
gridContainer:{
    marginTop:30
},
form:{
    display:"flex"
}

    }
});




const Anime = () => {
    
    // dispatch
    const dispatch = useDispatch();
    // Hook
    const [searchText, setsearchText] = useState('');
    // Fetching Anime
    useEffect(() => {
        const searchText="One p"
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
            <form onSubmit={submitHandle} className={classes.form}>
            <TextField
            className={classes.textField}
            color="secondary"
            variant="outlined"
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
                 xl={3}
                 lg={4}
                 md={6}
                 sm={12}
                 >
          <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={anime.image_url}
          alt={anime.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {anime.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                 </Grid>
             ))}
            </Grid>
        </Container>
    )
}

export default Anime
