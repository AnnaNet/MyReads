import React, {Component} from 'react';

class Select extends Component {
  render() {
    return (
      <div className="book">
    	<div className="book-top">
    	  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
		  <div className="book-shelf-changer">
			<select value={this.props.val} onInput={(event) => this.props.onChangePlace(event, this.props.book)}>
      	  	  <option value="move" disabled>Move to...</option>
      	  	  <option value="currentlyReading">Currently Reading</option>
      	  	  <option value="wantToRead">Want to Read</option>
      	  	  <option value="read">Read</option>
      	  	  <option value="none">None</option>
    		</select>
     	  </div>
		</div>
    	<div className="book-title">{this.props.book.title}</div>
		<div className="book-authors">{this.props.book.authors}</div>
	  </div>
	)
  }
}

export default Select;