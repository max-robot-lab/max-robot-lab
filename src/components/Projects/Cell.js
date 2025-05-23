import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.title}</h3>
        <h4>研究内容/Research Content:</h4>
        <p className="direction_description">{data.status}</p>
        <p className="direction_description">{data.statusen}</p>
      </header>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </div>
      {/* <div className="description">
        <p>{data.desc}</p>
      </div> */}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    statusen: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    date2: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
