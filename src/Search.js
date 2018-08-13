import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
//import NewBooks from './NewBooks'
import Select from './Select'

class Search extends Component {

  search = (newVal) => {
    BooksAPI.search(newVal).then((newBooks) => {      
      console.log (newBooks)
        if (newBooks.error) {
          console.log ('ERROR')
		  this.props.error()
      	} else {this.props.toState(newBooks)}
    });
  }

  render() {
    return (
		<div className="search-books">
         
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                {
				}
              <input onChange={(event) => {this.search(event.target.value)}} type="text" placeholder="Search by title or author"/>
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
			  {this.props.results.map((newBook) => (
      			<li key={newBook.id}>
					<Select val={newBook.shelf} book={newBook} onChangePlace={this.props.transit}/>
        		</li>
			  ))}
			</ol>
          </div>

        </div>
	)
  }
}

export default Search;