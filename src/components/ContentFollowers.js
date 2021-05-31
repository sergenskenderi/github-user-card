import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop : '20px'
  }
  }));

function ContentFollowers({followers}){
    const classes = useStyles();
    return (
        <div>
          <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <Avatar alt="Avatar" src={followers.avatar_url} className={classes.large} />
          </Grid>
          <Grid item xs={6}>
           <a href={followers.html_url}><h6>{followers.login}</h6></a>
          </Grid>
          </Grid>
          </div>
        </div>
    )
}

export default ContentFollowers;