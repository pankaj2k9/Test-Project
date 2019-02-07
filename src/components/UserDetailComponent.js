import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
export default function UserDetailComponent({ user }) {

    let image = user["image-thumb"];
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Card>
                        <CardImg top width="100%" height="auto" src={image} alt={user.name} />
                        <CardBody>
                            <CardTitle className="user-title">{user.name}</CardTitle>
                            <CardSubtitle>City: {user.city}</CardSubtitle>
                            <CardText>
                                Gender: {user.gender}<br />
                                Age: {user.age}<br />
                            </CardText>
                            <Link to={`/`} >
                                <Button>Back To Userlist</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>


        </div>

    )
}

