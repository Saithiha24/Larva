

import { Card, CardActionArea,  CardMedia,   Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const AnimeSlide = ({animes}) => {
  
  return (
    <>
    <Typography variant="h5" style={{display:"flex",alignItems:"center",marginBottom:"10px",color:"white"}}>
     Anime
    </Typography>
    <div className="slide-container">
    <Slide>
     {animes.map((anime)=> (
         <Card key={anime.mal_id}>
          <Link to={`component/anime/${anime.mal_id}`}  style={{textDecoration:"none"}}>
         <CardActionArea>
           <CardMedia
             component="img"
             height="300"
             image={anime.image_url}
             alt={anime.title}
             style={{display:"flex",justifyContent:"center",alignItems:"center"}}
           />
         </CardActionArea>
         {/* Image Tilte */}
         <Typography variant="h6" 
         style={{display:"flex",justifyContent:"center",alignItems:"center"}}
         >{anime.title}
         </Typography>
         </Link>
       </Card>
      ))} 
    </Slide>
  </div>
  </>
  )
}

export default AnimeSlide

