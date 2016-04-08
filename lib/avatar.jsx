import React, { PropTypes } from 'react';

export default function Avatar(props) {
  return (
    <div className="avatar">
      <p>
        <em>{props.email}</em>
      </p>
      <img src={props.src} className="img-rounded" />
    </div>
  );
}

Avatar.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};
