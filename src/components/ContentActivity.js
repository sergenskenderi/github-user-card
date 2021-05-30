import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import GroupIcon from '@material-ui/icons/Group';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    attribute : {
        marginTop : 'auto' ,
        marginBottom : 'auto'
    }
  }));

function ContentActivity({followers,following,public_gists,public_repos}){
    const classes = useStyles();
    return (
        <div>
          <h5>User Activity</h5>
        <div className={classes.root}>
        <CallMissedOutgoingIcon /> 
        <p>Followers : </p> 
        <h6 className={classes.attribute}>{followers}</h6>
        </div>
        <div className={classes.root}>
        <GroupIcon /> 
        <p>Following : </p> 
        <h6 className={classes.attribute}>{following}</h6>
        </div>
        <div className={classes.root}>
        <QuestionAnswerIcon /> 
        <p>Gists : </p> 
        <h6 className={classes.attribute}>{public_gists}</h6>
        </div>
        <div className={classes.root}>
        <AssessmentIcon /> 
        <p>Repos : </p> 
        <h6 className={classes.attribute}>{public_repos}</h6>
        </div>
        </div>
    );
}

export default ContentActivity;