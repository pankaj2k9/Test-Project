import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

const RenderBlockUser = ({ user }) => {
    let image = user["image-thumb"];
    return (
        <Card>
            <CardImg top className="blocked-image" width="120px" height="120px" src={image} alt={user.name} />
            <CardBody>
                <Link to={`/user/${user.id}`} >
                    <CardTitle className="user-title">{user.name}</CardTitle>
                </Link>
                <CardSubtitle>{user.city}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default class UserListComponent extends Component {
    state = {
        gender: 'Female',
        usersList: []
    }

    componentDidMount() {
        this.genderSwitcher();
    }
    genderSwitcher = () => {
        let Users = this.props.users && this.props.users.filter((user) => user.gender === this.state.gender);
        this.setState({
            usersList: Users
        });

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }, () => {
            this.genderSwitcher();
        });

    }


    render() {
        let userList = this.state.usersList.map((user) => {
            return (
                <div className="w-20" key={user.id}>
                    <RenderBlockUser user={user} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h3>UserList</h3>
                        <Form >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select Gender</label>
                                <select
                                    className="form-control"
                                    name="gender"
                                    id="exampleFormControlSelect1"
                                    defaultValue={this.state.gender}
                                    onChange={this.handleInputChange}>
                                    <option value="Female"> Female</option>
                                    <option value="Male">Male</option>
                                </select>
                            </div>
                        </Form>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {userList}
                </div>
            </div>
        );
    }
}
