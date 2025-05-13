import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Others = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Others</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Others.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Others.defaultProps = {
  data: [],
};

export default Others;
