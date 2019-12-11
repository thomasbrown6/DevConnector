import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation, getCurrentProfile } from '../../actions/profile';

const Education = ({ education, deleteEducation, getCurrentProfile }) => {
  let educations;
  if (education) {
    educations = education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className='hide-sm'>{edu.degree}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
          {edu.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={e => {
              deleteEducation(edu._id);
              getCurrentProfile();
            }}
            className='btn btn-danger'
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <Fragment>
      <h2 className='my-2'>Education</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
   getCurrentProfile: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation, getCurrentProfile })(Education);
