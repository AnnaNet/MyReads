import React, {Component} from 'react';
import Select from './Select'

class ChangePlace extends Component {
  changePlace = (book) => {
	console.log (book)
  }
  render() {
    return (
      <div>
 	    <Select onChangePlace={this.changePlace}/>
      </div>
    )
  }
}

export default ChangePlace;