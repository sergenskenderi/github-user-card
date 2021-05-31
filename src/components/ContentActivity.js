import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import GroupIcon from '@material-ui/icons/Group';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop : '25px',
    marginBottom : '15px'
  },
  attribute : {
    marginTop : 'auto',
    marginBottom : 'auto'
  },
  value : {
    marginTop : '15px'
  }
  }));

function ContentActivity({followers,following,public_gists,public_repos}){
    const classes = useStyles();
    return (
        <div>
          <h5>User Activity</h5>
        <div className={classes.root}>
        <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <CallMissedOutgoingIcon />
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Followers : </p> 
          </Grid>
        </Grid>
        <h6 className={classes.value}>{followers}</h6>
        </div>

        <div className={classes.root}>
        <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <GroupIcon />
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Following : </p> 
          </Grid>
        </Grid>
        <h6 className={classes.value}>{following}</h6>
        </div>

        <div className={classes.root}>
        <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <QuestionAnswerIcon />
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Gists : </p> 
          </Grid>
        </Grid>
        <h6 className={classes.value}>{public_gists}</h6>
        </div>

        <div className={classes.root}>
        <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <AssessmentIcon />
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Repos : </p> 
          </Grid>
        </Grid>
        <h6 className={classes.value}>{public_repos}</h6>
        </div>
        
        </div>
    );
}

export default ContentActivity;