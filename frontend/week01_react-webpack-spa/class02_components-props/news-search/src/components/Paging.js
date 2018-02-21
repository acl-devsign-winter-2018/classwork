import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    totalResults: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
  };

  render() {
    const { totalResults, page, perPage, onPrev, onNext } = this.props;

    const totalPages = Math.ceil(totalResults / perPage);

    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={onPrev} disabled={page === 1}>&lt; Prev</button>
        <button onClick={onNext} disabled={page === totalPages}>Next &gt;</button>
      </div>
    );
  }
}