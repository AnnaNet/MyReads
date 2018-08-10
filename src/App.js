import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    library: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        library: books,
      })
   })
  }

  changePlace = (event, item) => {
    const shelf=event.target.value
    const id=item.id
    console.log (`id = ${id}`)
    let index=0
      const newLib = this.state.library.map((book) => {
      	if (book.id === id) {this.state.library[index].shelf=shelf}
      	index++
      })   
    this.setState((state) => {
	  library: newLib
    })
  }

  render() {
    return (
      <div className="app">
    	<ListBooks library={this.state.library} transit={this.changePlace}/>
	  </div>
    )
  }
}
export default BooksApp
