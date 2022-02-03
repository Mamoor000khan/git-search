import { React,useState } from 'react';
import DisplayProfile from './DisplayProfile';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { SettingsBluetoothTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      marginTop: '100px',
      display:'flex',
      justifyContent:'center'
      // marginLeft:'40px',
      // marginRight:'80px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    searchIcon: {
       padding: theme.spacing(0, 1.8),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'white',
    },
    inputInput: {
       padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
       transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '200px',
      },
    },
     
  }));

function Showprofile() {
    const classes = useStyles();
    
    const [userName,setUserName] = useState("");
    const [data,setData] = useState({});
    

    const onChangeHandler =(e)=>{
        setUserName(e.target.value);
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            setData(originalData,  );
              
          }
        })
    }
    return (
        <>
    <div className={classes.grow} >
      <AppBar  position="static" style={{width:'896px', height:'60px', borderRadius:'12px', backgroundColor:'rgba(37, 40, 47,1)'}}>
        <Toolbar id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
          <form className={classes.search} >
            <SearchIcon color="primary"/>
              <InputBase 
              type={userName} 
              // id="w"  
              onChange={onChangeHandler}
              placeholder="search GitHub username..."
              classes={{
                 root: classes.inputRoot,
                input: classes.inputInput,
              }}
               //inputProps={{ 'aria-label': 'search' }}
            />
     
          </form>
          <div className={classes.grow} />
          
           <Button  variant="contained" color="primary" onClick={onSubmitHandler}  >
              Primary
           </Button>
          </Toolbar>
         </AppBar>
        </div>
    <DisplayProfile data={data}></DisplayProfile>
    </> 
  );
}
           
     




        {/* <div className={classes.grow} >
            
            <AppBar position="static" style={{width:'896px', height:'60px', borderRadius:'12px', backgroundColor:'rgba(37, 40, 47,1)'}}>
                
            <Toolbar >
                    <div className={classes.search}>
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                        
                         <div  className={classes.search}>
                         <SearchIcon color="primary"/>
                          <input classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
              }} placeholder="Github username" type={userName} id="w"  onChange={onChangeHandler}/>
                  
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                        </div>
      
                        </form>
              
                    </div>


               
                </Toolbar>
            </AppBar>
        </div>
        <DisplayProfile data={data}></DisplayProfile>
        </>

    )
} */}

export default Showprofile;
