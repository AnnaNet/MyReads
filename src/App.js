import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

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

  changePlace = (event, item) => {
    item.shelf=event.target.value
	console.log (event.target.value)
    this.setState((state) => ({
      
	  library: state.library.filter((book) => book.shelf === item.shelf),
//      secondPlace: state.secondPlace.filter((book) => book.shelf === item.shelf),
//      thirdPlace: state.thirdPlace.filter((book) => book.shelf === item.shelf)
    
    }))
  }

  render() {
    return (
      <div className="app">
    	<ListBooks library={this.state.library} onChangePlace={this.changePlace}/>
		
	  </div>
    )
  }
}
export default BooksApp
