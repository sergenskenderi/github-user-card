import React from "react";
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import BookIcon from '@material-ui/icons/Book';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TwitterIcon from '@material-ui/icons/Twitter';
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
  }
  }));

function ContentPersonalInfo({company,location,email,blog,name,hirable,twitter_username}){
    const classes = useStyles();
    return (
        <div>
          <h5>Profile Informations</h5>
          {company &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <BusinessIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Copmany : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{company}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {location &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <LocationOnIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Location : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{location}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {email &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <EmailIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Email : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{email}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {blog &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <BookIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Blog : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{blog}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {name &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <AccountCircleIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Name : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{name}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {hirable &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <VerifiedUserIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Hirable : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{hirable}</h6>
          </Grid>
          </Grid>
        </div>
        }
        {twitter_username &&
        <div className={classes.root}>
          <Grid container direction="row"
           justify="center" alignItems="center" spacing={1}>
          <Grid item xs={1}>
          <TwitterIcon /> 
          </Grid>
          <Grid item xs={2}>
          <p className={classes.attribute}>Twitter : </p> 
          </Grid>
          <Grid item xs={3}>
          <h6 className={classes.attribute}>{twitter_username}</h6>
          </Grid>
          </Grid>
        </div>
        }
        </div>
    );
}

export default ContentPersonalInfo;