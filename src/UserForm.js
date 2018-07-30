import React from 'react';
import PropTypes from 'prop-types'

const row = {
};

const cell = {
        display: 'inline-block',
        padding: '10px'
  };

const styles = {
    row: row,
    cell: cell
  };

const UserForm = props => {
    return (
        <div>
            <form onSubmit={props.onSubmit} style={styles.row}>
                <div style={styles.cell}>
                    <label>Name: </label>
                    <br/>
                    <input type="text" name="name" onChange={props.onChange} value={props.name}/>
                </div>
                <div style={styles.cell}>
                    <label>E-mail: </label>
                    <br/>
                    <input type="text" name="email" onChange={props.onChange} value={props.email}/>
                </div>
                <div style={styles.cell}>
                    <label>City: </label>
                    <br/>
                    <input type="text" name="city" onChange={props.onChange} value={props.city}/>
                </div>

                <button type="submit">Submit</button>
                <label onClick={props.onClear}>Clear</label>
            </form>
        </div>
    ); 
};

UserForm.propTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        onClear: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }).isRequired
}

export default UserForm;