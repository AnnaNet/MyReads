import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from'./ListBooks'
import ChangePlace from'./ChangePlace'

class BooksApp extends React.Component {
  state = {
    library: [],
    firstPlace: [],
    secondPlace: [],
    thirdPlace: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const first = books.filter((item) => 
        item.shelf === "currentlyReading"
      )
      const second = books.filter((item) => 
        item.shelf === "wantToRead"
      )
      const third = books.filter((item) => 
        item.shelf === "read"
      )
      this.setState({
        library: books,
		firstPlace: first,
        secondPlace: second,
        thirdPlace: third
      })
   })
  }

  render() {
    return (
      <div className="app">
        <ChangePlace firstPlace={this.state.firstPlace} secondPlace={this.state.secondPlace} thirdPlace={this.state.thirdPlace}/>
    	<ListBooks firstPlace={this.state.first}/>
	  </div>
    )
  }
}
export default BooksApp
