import React, { PropTypes } from 'react';

export default function Email(props) {
  return (
    <div className="form-group">
      <input onChange={props.handleEmailChange} className="form-control"
        style={{
          width: 200,
        }}
        type="text"
      />
      <button onClick={props.fetchGravatar} className="btn-success btn">
        Fetch
      </button>
    </div>
  );
}

Email.propTypes = {
  handleEmailChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
};
