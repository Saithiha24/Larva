import {
     Container, 
     makeStyles,
     TextField,
     Grid,
     CardActionArea,
     CardMedia,
     CardContent,
     Typography,
     Card
    } from '@material-ui/core'

import React,{useEffect} from 'react'
import { FetchAysncAnime, getallAnimes } from '../../Redux/movieSlice';
import { useDispatch,useSelector } from 'react-redux';



const useStyle = makeStyles(()=>{
    return{
textField:{
    background:"gray",
    position:"sticky",
    top:0,
},
gridContainer:{
    marginTop:30
}
    }
});




const Anime = () => {
    // dispatch
    const dispatch = useDispatch();
    // Fetching Anime
    useEffect(() => {
      const searchText = "Haikyuu"
      dispatch(FetchAysncAnime(searchText));
        
    }, [dispatch])
    const classes = useStyle();
    // useSelector
    const animes = useSelector(getallAnimes)
    return (
        <Container>
            <TextField
            className={classes.textField}
            color="secondary"
            autoComplete="string" 
            variant="outlined"
            label="Search......"
            fullWidth
            />
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
