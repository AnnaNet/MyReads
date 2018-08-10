import React, {Component} from 'react';

class Select extends Component {
  changePlace = (item) => {
	console.log (item)
  }
  render() {
    return(
  	  <div className="book-shelf-changer">
    	<select onChange={(event) => this.changePlace(this.props.item)}>
      	  <option value="move" disabled>Move to...</option>
      	  <option value="currentlyReading">Currently Reading</option>
      	  <option value="wantToRead">Want to Read</option>
      	  <option value="read">Read</option>
      	  <option value="none">None</option>
    	</select>
     </div>
    )
  }
}

export default Select;