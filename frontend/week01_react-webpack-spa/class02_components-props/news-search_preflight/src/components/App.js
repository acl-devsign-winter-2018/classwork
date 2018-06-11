import React, { Component } from 'react';
import styles from './App.css';
import Search from './Search';
import Paging from './Paging';
import Articles from './Articles';
import { search } from '../services/newsApi';

const PAGE_SIZE = 20;

export default class App extends Component {

  state = {
    articles: null,
    topic: '',
    page: 1,
    perPage: 20,
    totalResults: 0,
    loading: false,
    error: null
  };

  searchNews = () => {
    const { topic, sources, page, perPage } = this.state;

    this.setState({ loading: true, error: null });
    
    search({ topic, sources }, page, perPage)
      .then(
        ({ articles, totalResults }) => {
          this.setState({ articles, totalResults });
        }, 
        error => this.setState({ error }))
      .then(() => {
        this.setState({ loading: false });
      });
  };

  handleSearch = (search) => {
    this.setState(search, this.searchNews);
  };

  handlePrev = () => this.handlePaging(-1);
  handleNext = () => this.handlePaging(1);

  handlePaging = incr => {
    this.setState(
      prev => ({ page: prev.page + incr }),
      this.searchNews
    );
  };

  render() {
    const { articles, error, loading, page, topic, totalResults } = this.state;

    return (
      <div className={styles.app}>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>
        <main>
          <div className="search-header">
            {articles ? 
              <div>
                <h4>Search for &quot;{topic}&quot; found {totalResults} matches</h4>
              </div> 
              : 
              <div>Please search above</div>
            }
          </div>

          <div>{loading && 'Loading...'}</div>
          <pre className="error">{error && error.message}</pre>

          {articles && (
            <div>
              <Paging totalResults={totalResults} 
                page={page} 
                perPage={PAGE_SIZE} 
                onPrev={this.handlePrev} 
                onNext={this.handleNext}/>
              <Articles articles={articles}/>
            </div>
          )}
        </main>
      </div>
    );
  }
}