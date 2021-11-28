import React from 'react'
import Home from './Home/Home'
import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import Anime from './component/Anime/Anime'
import Movie from './component/Movies/Movie'
import Show from './component/Show/Show'
import Layout from "./Features/Layout"
export const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
             main:"#141A25",
            },
            secondary:{
                main:"#88A4DF" 
            },
            text:{
               primary:'#3E4E6D'
            }
    },
});
    return (
        <ThemeProvider theme={theme}>
         <Router>
         <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/component/anime" element={<Anime />}/>
              <Route exact path="/component/movie" element={<Movie />}/>
              <Route exact path="/component/Show" element={<Show />}/>
            </Routes> 
            </Layout>
        </Router> 
        </ThemeProvider>
          
        
    )
}
