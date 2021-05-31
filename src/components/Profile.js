import React from "react";
import { Card } from "react-bootstrap";
import Header from "./Header";
import ContentPersonalInfo from "./ContentPersonalInfo";
import ContentActivity from "./ContentActivity";
import ContentFollowers from "./ContentFollowers";
import moment from "moment";
import ReactGitHubCalendar from 'react-ts-github-calendar';

function Profile (props) {
    return (
        <div>
            <Card style={{
                  width : '36rem' ,
                  margin: 'auto' ,
                  marginTop : '1%',
                  marginBottom : '20px'
                  }}>
                <Card.Header> <Header avatar_url={props.profile.avatar_url} username={props.profile.login} 
                html_url={props.profile.html_url}/> </Card.Header>
                <Card.Body>
                    {props.profile.bio &&
                    <div>
                    <Card.Title>{props.profile.bio}</Card.Title>
                    <hr></hr>
                    </div>
                    }
                    { (props.profile.company || props.profile.location || props.profile.email || props.profile.blog || props.profile.name ||
                        props.profile.hirable || props.profile.twitter_username) &&
                    <div>
                    <ContentPersonalInfo company={props.profile.company} location={props.profile.location} email={props.profile.email} blog={props.profile.blog} 
                    name={props.profile.name} hirable={props.profile.hirable} twitter_username={props.profile.twitter_username}/>
                     <hr></hr>
                    </div>
                    }
                    <ContentActivity followers={props.profile.followers} following={props.profile.following} public_gists={props.profile.public_gists} 
                    public_repos={props.profile.public_repos}/>
                    {props.profile.followers !== 0 &&
                    <div>
                     <hr></hr>
                     <h5>Followers</h5>
                     {props.followers.map( follower => {
                         return <ContentFollowers key={follower.id} followers={follower} />;
                     })}
                    </div>
                    }
                    <hr></hr>
                    <ReactGitHubCalendar tooltips responsive  userName={props.profile.login} />
                </Card.Body>
                <Card.Footer className="text-muted">Last Updated : {moment(props.profile.updated_at).format("LLLL")}</Card.Footer>
            </Card>
        </div>
    )
}

export default Profile;