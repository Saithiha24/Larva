import React from 'react'
import Home from './Home/Home'
import {ThemeProvider, createTheme} from "@material-ui/core"
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"
import Anime from './component/Anime/Anime'
import Movie from './component/Movies/Movie'
import Show from './component/Show/Show'
import Layout from "./Features/Layout"
export const App = () => {
    const theme = createTheme();
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
