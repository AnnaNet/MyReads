import React, {Component} from 'react';

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