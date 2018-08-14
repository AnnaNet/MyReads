import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    library: [],
    results: [],
    lastSearchValue: '',
    error: ''

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
        library: books
      })
   })
  }

  changePlace = (event, item) => {
    console.log ('new book ' + item)
    const shelf=event.target.value
    const id=item.id
    console.log (item.title)
    let index=0
    let flag=true
    
    const newLib = this.state.library.map((book) => {
      if (book.id === id) {this.state.library[index].shelf=shelf
                          flag=false}
      index++
    })
    index=0
    if (flag) {
      const newRes = this.state.results.map((book) => {
        if (book.id === id) {
          console.log (index)
          this.state.results[index].shelf=shelf
          book.shelf=shelf
      	  this.setState(state => ({
          	library: state.library.concat(book)
      	  }))
        }
        index++
      })
      console.log (this.state.results)
      this.setState((state) => {
        results: newRes
      })
    } else {
      this.setState((state) => {
	  	library: newLib
      })
    }
  }

  toState = (newBooks) => {
    newBooks.map((addShelf) => {
      addShelf.shelf='none'
      if (!('imageLinks' in addShelf)) {
        addShelf.imageLinks='http://via.placeholder.com/128x193?text=BOOK'
      }
      this.state.library.map((book) => {
      	if (addShelf.id === book.id) {
          addShelf.shelf=book.shelf
      	}
      })
    })
	this.setState({
      results: newBooks
    })         
  }
  
  error = (state) => {
    this.setState({
      results: [],
      error: 'Sorry, no results on this query, try another.'
    })
  }

  changeSearchValue = (newVal) => {
    this.setState({
      lastSearchValue: newVal
    })
  }

  clearResults = (state) => {
    this.setState({
      results: [],
      error: ''
    })
  }

  clearTextValue = (state) => {
    this.setState({
      error: ''
    })    
  }

  image = (book) => {
'http://via.placeholder.com/128x193?text=BOOK'
  }

  render() {
    return (
      <div className="app">
    	<Route exact path='/' render={() => (
       	  <ListBooks 
       	  	library={this.state.library}
      	    transit={this.changePlace}
		  />
		)}/>
		<Route path='/search' render={() => (
          <Search
          	results={this.state.results}
			lastSearchValue={this.state.lastSearchValue}
			toState={this.toState}
            transit={this.changePlace}
			error={this.error}
			errorText={this.state.error}
			changeSearchValue={this.changeSearchValue}
			clearResults={this.clearResults}
			clearTextError={this.clearTextValue}
          />
		)}/>
	  </div>
    )
  }
}
export default BooksApp
