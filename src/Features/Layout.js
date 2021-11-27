import 
{ 
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
     Divider,
    AppBar,
    Toolbar,
    Container,

 } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router';



const drawerWidth = 240;
const UseStyle = makeStyles((theme)=>{
    return {
        layout:{
         display:"flex"
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        home:{
            background:"black",
        },
        appbar:{
            width:`calc(100%-${drawerWidth}px)`
        },
        toolbarClone:theme.mixins.toolbar,
        listitem:{
            cursor:"pointer"
        }
     
    }
});
const Layout = ({children}) => {
    // classes for makeStyles
    const classes = UseStyle();
    // router-dom and State
    const navigate = useNavigate();
    // List of Items in the drawer
   const  CatagoryItems  = [
    {text:"Anime",path:"/component/anime"},
    {text:"Movie",path:"/component/movie"},
    {text:"Show",path:"/component/show"}
    ]
    return (
        <div className={classes.layout}>
         {/* Appbar */}
        <AppBar className={classes.appbar}
        color="secondary">
            <Toolbar>
                <Typography variant="h4">
                Larva
                </Typography>
            </Toolbar>
        </AppBar>
       
        {/* Drawer */}
       <Drawer
       variant="permanent"
       archor="left"
       className={classes.drawer}
       classes={{paper:classes.drawerPaper}}
       >

        <Toolbar></Toolbar>
        {/* Drawer List Item */}
        <Divider>
        <List>
      {CatagoryItems.map((item)=>(
          <ListItem key={item.text}
          className={classes.listitem}
          onClick={()=>{navigate(item.path)}}
          >
          <ListItemText primary={item.text} />
      
        </ListItem>
      ))}
        </List>
        </Divider>
        {/* end of Catagories */}
       </Drawer>

        {/*  Main Content */}
        <Container className={classes.home}>
        <div className={classes.toolbarClone}></div>
        {children}
        </Container>
        
        
        </div>
    )
}

export default Layout
