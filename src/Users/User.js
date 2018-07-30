import React from 'react';
import PropTypes from 'prop-types'

const row = {
};

const cell = {
        display: 'inline-block',
        padding: '20px'
  };

const styles = {
    row: row,
    cell: cell
  };

const User = props => {
    
    return (
        <div style={styles.row}>
            <div style={styles.cell}>{props.name}</div>
            <div style={styles.cell}>{props.email}</div>
            <div style={styles.cell}>{props.city}</div>
            <div style={styles.cell} onClick={props.onDeleteClick}>Delete</div>
            <div style={styles.cell} onClick={props.onChangeClick}>Edit</div>
        </div>
    ); 
};

User.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        onDeleteClick: PropTypes.func,
        onChangedClick: PropTypes.func
    }).isRequired
}

export default User;