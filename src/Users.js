import React from 'react';
import PropTypes from 'prop-types'
import User from './Users/User'
import Head from './Users/Head'

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
            <Head/>
            {props.children}
        </div>
    ); 
};

Users.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        city: PropTypes.string
    }).isRequired
}

export {Users, Map}