import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, author, description, publishedAt, url, urlToImage } = this.props.article;
    
    return (
      <li>
        <a href={url} target="_blank">
          <h2>{title} by {author} on {publishedAt}</h2>
          <p>{description}</p>
          <img src={urlToImage}/>
        </a>
      </li>
    );
  }
}