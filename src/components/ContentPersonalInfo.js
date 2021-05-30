import React from "react";
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import BookIcon from '@material-ui/icons/Book';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TwitterIcon from '@material-ui/icons/Twitter';

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

function ContentPersonalInfo({company,location,email,blog,name,hirable,twitter_username}){
    const classes = useStyles();
    return (
        <div>
          <h5>Profile Informations</h5>
        {company &&
        <div className={classes.root}>
        <BusinessIcon /> 
        <p>Copmany : </p> 
        <h6 className={classes.attribute}>{company}</h6>
        </div>
        }
        {location &&
        <div className={classes.root}>
        <LocationOnIcon /> 
        <p>Location : </p> 
        <h6 className={classes.attribute}>{location}</h6>
        </div>
        }
        {email &&
        <div className={classes.root}>
        <EmailIcon /> 
        <p>Email : </p> 
        <h6 className={classes.attribute}>{email}</h6>
        </div>
        }
        {blog &&
        <div className={classes.root}>
        <BookIcon /> 
        <p>Blog : </p> 
        <h6 className={classes.attribute}>{blog}</h6>
        </div>
        }
        {name &&
        <div className={classes.root}>
        <AccountCircleIcon /> 
        <p>Name : </p> 
        <h6 className={classes.attribute}>{name}</h6>
        </div>
        }
        {hirable &&
        <div className={classes.root}>
        <VerifiedUserIcon /> 
        <p>Hirable : </p> 
        <h6 className={classes.attribute}>{hirable}</h6>
        </div>
        }
        {twitter_username &&
        <div className={classes.root}>
        <TwitterIcon /> 
        <p>Twitter : </p> 
        <h6 className={classes.attribute}>{twitter_username}</h6>
        </div>
        }
        </div>
    );
}

export default ContentPersonalInfo;