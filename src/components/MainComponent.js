import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import UserListComponent from './UserListComponent';
import UserDetailComponent from './UserDetailComponent';
import { fetchUsers } from '../redux/ActionCreators';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        users: state,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => { dispatch(fetchUsers()) }
});

class MainComponent extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        const { users, isLoading, errMess } = this.props.users;

        const UserWithId = ({ match }) => {
            return (
                <UserDetailComponent user={ users.filter((user) => user.id === match.params.id)[ 0 ] }
                />
            );
        };

        if (isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (users != null)
            return (

                <Switch>
                    <Route exact path='/' component={ () => <UserListComponent users={ users } /> } />} />
                    <Route exact path='/user' component={ () => <UserListComponent users={ users } /> } />} />
                    <Route path='/user/:id' component={ UserWithId } />
                    <Redirect to="/" />
                </Switch>
            );

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
