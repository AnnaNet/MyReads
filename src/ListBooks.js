import React, {Component} from 'react';
import Select from './Select'

class ListBooks extends Component {

  render() {
	return (
      <div className="app">
      
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
          		<h2 className="bookshelf-title">Currently reading</h2>
	  			<div className="bookshelf-books">
        		  <ol className="books-grid">
                	{(this.props.library.filter((item) => 
        	  	  	  item.shelf === "currentlyReading")).map((book) => (
                        <li key={book.id}>
						  <Select book={book} onChangePlace={this.props.transit}/>
						</li>
                	))}
				  </ol>
	  			</div>
              </div>
			</div>
            <div>
              <div className="bookshelf">
          		<h2 className="bookshelf-title">Want to read</h2>
	  			<div className="bookshelf-books">
        		  <ol className="books-grid">
                	{(this.props.library.filter((item) => 
        	  	  	  item.shelf === "wantToRead")).map((book) => (
                        <li key={book.id}>
						  <Select book={book} onChangePlace={this.props.transit}/>
						</li>
                	))}
				  </ol>
	  			</div>
              </div>
			</div>
            <div>
              <div className="bookshelf">
          		<h2 className="bookshelf-title">Read</h2>
	  			<div className="bookshelf-books">
        		  <ol className="books-grid">
                	{(this.props.library.filter((item) => 
        	  	  	  item.shelf === "read")).map((book) => (
                        <li key={book.id}>
						  <Select book={book} onChangePlace={this.props.transit}/>
						</li>
                	))}
				  </ol>
	  			</div>
              </div>
			</div>

		  </div>
      <div className="open-search">
        <a >Add a book</a>
      </div>
    </div>
</div>
    )
  }
}
export default ListBooks;