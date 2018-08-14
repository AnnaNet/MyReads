import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Select from './Select'

class ListBooks extends Component {

  render() {
	return (
      <div className="app">

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
						  <Select val='currentlyReading' book={book} onChangePlace={this.props.transit}/>
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
						  <Select val='wantToRead' book={book} onChangePlace={this.props.transit}/>
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
						  <Select val='read' book={book} onChangePlace={this.props.transit}/>
						</li>
                	))}
				  </ol>
	  			</div>
              </div>
			</div>

		  </div>
      	  <div className="open-search">
        	<Link to='/search'>
		  	  Add a book
			</Link>
      	  </div>
    </div>
</div>
    )
  }
}
export default ListBooks;