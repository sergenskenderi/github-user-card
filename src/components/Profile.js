import React from "react";
import { Card } from "react-bootstrap";
import Header from "./Header";
import ContentPersonalInfo from "./ContentPersonalInfo";
import ContentActivity from "./ContentActivity";

function Profile (props) {
    return (
        <div>
            <Card style={{
                  width : '30rem' ,
                  margin: 'auto' ,
                  marginTop : '5%'
                  }}>
                <Card.Header> <Header avatar_url={props.profile.avatar_url} username={props.profile.login} /> </Card.Header>
                <Card.Body>
                    <Card.Title>{props.profile.bio}</Card.Title>
                    <hr></hr>
                    <ContentPersonalInfo company={props.profile.company} location={props.profile.location} email={props.profile.email} blog={props.profile.blog} 
                    name={props.profile.name} hirable={props.profile.hirable} twitter_username={props.profile.twitter_username}/>
                    <hr></hr>
                    <ContentActivity followers={props.profile.followers} following={props.profile.following} public_gists={props.profile.public_gists} 
                    public_repos={props.profile.public_repos}/>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default Profile;