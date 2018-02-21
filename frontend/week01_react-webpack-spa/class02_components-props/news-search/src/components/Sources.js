import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSources } from '../services/newsApi';
import styles from './Sources.css';

const gotSources = getSources();

export default class Sources extends Component {

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  };

  state = {
    sources: null
  };

  componentDidMount() {
    gotSources.then(sources => this.setState({ sources }));
  }

  handleCheck = () => {
    const { onSelect } = this.props;

    const selected = this.inputs
      .filter(input => input.checked)
      .map(input => input.value);

    onSelect(selected);
  };

  render() {
    const { sources } = this.state;
    const inputs = this.inputs = [];
    if(!sources) return null;

    return (
      <ul className={styles.sources}>
        {sources.map(({ id, name }) => (
          <li key={id}>
            <label>
              <input name="sources" value={id} type="checkbox"
                ref={input => inputs.push(input)}
                onChange={this.handleCheck}/>
              &nbsp;{name}
            </label>
          </li>
        ))}
      </ul>
    );
  }
}