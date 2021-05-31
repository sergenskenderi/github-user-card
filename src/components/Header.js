import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  username : {
      marginTop : 'auto',
      marginBottom : 'auto'
  }
}));

function Header (props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Avatar alt="Avatar" src={props.avatar_url} className={classes.large} />
        <a style={{textDecoration : 'none' , color : 'black'}} className={classes.username} 
        href={props.html_url}><h5>{props.username}</h5></a>
      </div>
    )
}

export default Header