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
    total: 0,
    topic: null,
    page: 1,
    loading: false,
    error: null
  };

  searchNews = () => {
    this.setState({
      loading: true,
      error: null
    });

    const { topic, page } = this.state;

    search(topic, page, PAGE_SIZE)
      .then(
        ({ articles, totalResults }) => {
          this.setState({ articles, totalResults });
        },
        error => {
          this.setState({ error, articles: null });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  };

  handleSearch = topic => {
    this.setState({ topic }, this.searchNews);
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

    const resultsHeader = <div>Search for &quot;{topic}&quot; found {totalResults} matches</div>;
    const noSearch = <div>Please search above</div>;

    return (
      <div className={styles.app}>
        <header>
          <Search onSearch={this.handleSearch}/>
        </header>
        <main>
          <div className="search-header">
            {articles ? resultsHeader : noSearch}
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