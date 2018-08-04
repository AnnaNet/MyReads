import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  render() {
	return (
      <p>
        {this.props.books}
      </p>
    )
  }
}
export default ListBooks;