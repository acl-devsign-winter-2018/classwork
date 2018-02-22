import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Movies from './Movies';

describe('Movies', () => {
  it('renders movies', () => {
    const movies =  [{
      'Title': 'Star Wars: Episode IV - A New Hope',
      'Year': '1977',
      'imdbID': 'tt0076759',
      'Type': 'movie',
      'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    }, {
      'Title': 'Star Wars: Episode V - The Empire Strikes Back',
      'Year': '1980',
      'imdbID': 'tt0080684',
      'Type': 'movie',
      'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    }];

    const wrapper = shallow(<Movies movies={movies}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});