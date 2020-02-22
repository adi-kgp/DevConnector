import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description }
}) => {
  return (
    <>
      <h3 className='text-dark'>College: {school}</h3>
      <p>
        <strong>From: </strong>
        <Moment format='YYYY/MM/DD'>{from}</Moment>
        <strong> To:</strong>
        {"   "}
        {!to ? " Present" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
