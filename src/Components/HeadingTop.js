import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    marginTop:'31px',
    display:'flex',
    justifyContent:'center'
  },
  heading:{
      marginLeft:'40px',
      fontSize:'30px',
      fontFamily:'Heebo',
      fontWeight:500,
      color:'black',
      
  },

  title:{
      fontSize:'20px',
      fontFamily:'Heebo',
      fontWeight:'700',
      color:'black',
      letterSpacing:'3px'
  }
  }));

export default function HeadingTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid style={{width:'947px'}}>  
        <Grid style={{display:'flex', justifyContent:'space-between'}}>
          <Grid item xs={4} className={classes.heading} style={{ color:'#fff' }}>
            devfinder
          </Grid>
          
         <Grid item xs={4} style={{display: 'flex', justifyContent: 'space-evenly'}}>
           <Grid item xs={2} className={classes.title} style={{ color:'#fff'}}>
             LIGHT
           </Grid>
        
          <Grid item xs={2}>
            <WbSunnyIcon style={{color:'#fff'}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  
  );
};