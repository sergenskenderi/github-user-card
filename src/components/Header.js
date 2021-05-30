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
        <h5 className={classes.username}>{props.username}</h5>
      </div>
    )
}

export default Header