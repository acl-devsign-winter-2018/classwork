import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class About extends Component {
  render() {
    return (
      <DocumentTitle title="Budget Tracker | About"> 
        <div>
          <h1>About page</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </DocumentTitle>
    );
  }
}