import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import BusinessIcon from '@material-ui/icons/Business';

// import Skeleton from '@material-ui/core/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      display:'flex',
      justifyContent:'center',
      marginTop:'35px',
    },
    card:{
      width:'896px',
      height:451,
      borderRadius:'12px',
      backgroundColor:'rgba(37, 40, 47, 1)'
    },
  
    media: {
      fontSize:'30px',
      fontFamily:'Heebo',
      fontWeight: 700,
      color:'#fff',
      marginRight: '320px', 
      marginTop: '45px'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
     avatar: {
       width:'100px',
         height:'100px',
         marginTop: '30px',
         marginLeft: '69px'
     },
    feature:{
        fontSize:'20px',
        fontFamily:'Heebo',
        fontWeight: 200,
        color:'#fff',
        textAlign:'center',
        marginTop:'10px', 
    },
    header:{
      display: 'flex', 
      justifyContent: 'space-between',
      width: '100%'
    },

    joinng:{
      marginRight: '35px', 
      marginTop: '50px', 
      color:'#fff'
    },

    form:{
      display:'flex', 
      justifyContent:'space-evenly',
      marginTop:'35px',
      marginLeft:'120px' 
    },
  }));

function DisplayProfile({data}) {
    const classes = useStyles();
     return (
        <div className={classes.root}>
          <Card className={classes.card} >
             <div className={classes.header}>
                <Avatar className={classes.avatar}> 
                  <img alt='' src={data.avatar_url} className="rounded" width='155px'/> 
                </Avatar>
                
                <Typography className={classes.media}> 
                   <p>{data.login}</p> 
                   <p style={{fontSize:'20px'}}
                    >{data.bio}</p>
                </Typography>
        
                <Typography className={classes.joining}>{data.created}</Typography>
             </div>
          
          <form className={classes.form}>
               <Grid container spacing={3} style={{textAlign:'center', width:'600px', height:'75px', borderRadius: '4px',backgroundColor:'rgba(28, 21, 32, 1)', color:'#fff'}} >
                 <Grid item xs={4} >
                  <span className="articles">Repo</span> 
                   <p className="number1">{data.public_repos}</p>
                 </Grid>
                 
                 <Grid item xs={4} >
                   <span className="followers">Followers</span> 
                    <p className="number2">{data.followers}</p>
                 </Grid>
                 
                 <Grid item xs={4} >
                  <span className="rating">following</span> 
                    <p className="number3">{data.following}</p>
                 </Grid>
              </Grid>
           </form>

          <div style={{display:'flex', justifyContent:'center', marginTop:'25px'}}>
           <Grid container spacing={3} style={{width:'620px',color:'#fff',textAlign:'center',marginTop:'10px'}} >
             <Grid item xs={6} className={classes.feature} >
                <p className="number4"> <LocationOnIcon/> {data.location}</p>
             </Grid>
             
             <Grid item xs={6}>
                <p className="number5" style={{marginTop:'10px'}}> <TwitterIcon/> 
                {data.twitter}</p>
             </Grid>
    
             <Grid item xs={6}>
                <p className="number6"><GitHubIcon/> {data.blog}</p>
             </Grid>
    
             <Grid item xs={6}>
                <p className="number7"><BusinessIcon/> {data.company}</p>
             </Grid>
          </Grid>
       </div>                 
    </Card>
  </div>
    
  );
};
export default DisplayProfile
