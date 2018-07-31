import React from 'react';
import PropTypes from 'prop-types'
import User from './Users/User'
import Header from './Users/Header'

const Map = (users, onChangeClick, onDeleteClick) => {
    return (
        users.map((user, index) => (
        <User
            key={index}
            name={user.name}
            email={user.email}
            city={user.city}
            onDeleteClick={()=> onDeleteClick(user.id)}
            onChangeClick={() => onChangeClick(user)}
            />
    )));
};

Map.propTypes = {
    users: PropTypes.array.isRequired,
    onChangeClick: PropTypes.func,
    onDeleteClick: PropTypes.func
}

const Users = props => {

    return (
        <div className="table">
            <Header/>
            {props.children}
        </div>
    ); 
};

Users.propTypes = {
    children: PropTypes.array.isRequired
}

export {Users, Map}