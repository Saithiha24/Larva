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
    IconButton,

 
  

 } from '@material-ui/core';
 import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router';






let drawerWidth = 240;
const UseStyle = makeStyles((theme)=>{
  
    return {
        layout:{
         display:"flex"
        },
        drawer:{
            width:drawerWidth,
           
        },
        drawerPaper:{
            width:drawerWidth
        },
        drawerToolbar: {
          borderBottom:"1px solid gray"
        },
        toolbarClone:theme.mixins.toolbar,
        listitem:{
            cursor:"pointer"
        },
        active:{
           borderLeft:`3px solid ${theme.palette.secondary.main}`
        },
        drawerMenu:{
           color:theme.palette.text.primary
        },
        home:{
          background:theme.palette.text.primary,
          width:"100%"
        },
       appBarMenu:{
         marginRight:20
       }
    }
});
const Layout = ({children}) => {
    // classes for makeStyles
    const classes = UseStyle();
    // Functions
   const toggleDrawer = ()=>{
     setmobile(!mobile);
   }
    // router-dom and hook
    const navigate = useNavigate();
    const location = useLocation();
    const [mobile,setmobile] = useState(false);
    // List of Items in the drawer
   const  CatagoryItems  = [
     {text:"Home",path:"/"},
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
        color="secondary"
      >
        <Toolbar>
        <IconButton
          className={classes.appBarMenu}
          onClick={toggleDrawer}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h6" >
              Larva
          </Typography>
        </Toolbar>
      </AppBar>

       
        {/* Drawer  Desktop and Laptop */}
       <Drawer
      variant="temporary"
       archor="left"
       className={classes.drawerMobile}
       classes={{paper:classes.drawerPaper}}
       open={mobile}
       >
       {/* Drawer toolbar */}
        <Toolbar className={classes.drawerToolbar}>
          <IconButton
          className={classes.drawerMenu}
          onClick={toggleDrawer}
          >
          
          <MenuIcon  />
          </IconButton>
          </Toolbar>
   
        {/* Drawer/Laptop List Item */}
       
        <List>
      {CatagoryItems.map((item)=>(
          <ListItem key={item.text}
         
          className = {location.pathname===item.path ? classes.active : null}
          onClick={()=>{
              navigate(item.path);
              setmobile(!mobile)
            }}
          >
          <ListItemText  className={classes.listitem} primary={item.text} />
      
        </ListItem>
      ))}
        </List>
        
        {/* end of Drawer/Laptop ListItem */}
       </Drawer>
        
        {/*  Main Content */}
        <div className={classes.home}>
        <div className={classes.toolbarClone}></div>
        {children}
        </div>
        
        
        </div>
    )
}

export default Layout
