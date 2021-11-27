import 
{ 
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Toolbar,
    Container,

 } from '@material-ui/core'
import React from 'react'
import { useNavigate,useLocation } from 'react-router';



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
            background:"gray",
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        toolbarClone:theme.mixins.toolbar,
        listitem:{
            cursor:"pointer"
        },
        active:{
           borderLeft:"5px gray solid" 
        }
     
    }
});
const Layout = ({children}) => {
    // classes for makeStyles
    const classes = UseStyle();
    // router-dom and hook
    const navigate = useNavigate();
    const location = useLocation();
    // List of Items in the drawer
   const  CatagoryItems  = [
    {text:"Anime",path:"/component/anime"},
    {text:"Movie",path:"/component/movie"},
    {text:"Show",path:"/component/show"}
    ];
// function



    // 
    return (
        <div className={classes.layout}>
         {/* Appbar */}
         <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h5" component="h6">
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
       
        <List>
      {CatagoryItems.map((item)=>(
          <ListItem key={item.text}
         
          className = {location.pathname==item.path ? classes.active : null}
          onClick={()=>{
              navigate(item.path);
            }}
          >
          <ListItemText  className={classes.listitem} primary={item.text} />
      
        </ListItem>
      ))}
        </List>
        
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
