import React, { Component } from 'react';
import SearchResults from './search_results';

class SearchBar extends Component {
	constructor() {
		super();  
 		this.state = { 
 			dogImages: [],
 			breed: '',
 			listOpen: false,
 			headerTitle: "Select a friend"
 		};

 		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    let value;
    value = event;
    this.setState({headerTitle: event, breed: event});
    fetch('https://dog.ceo/api/breed/' +value+ '/images')
      .then(response => response.json())
      .then(data => this.setState({ dogImages: data.message }));
  }

	toggleList(){
	  this.setState(prevState => ({
	    listOpen: !prevState.listOpen
	  }))
	}

render () {
    let dogs = this.props.state.dogs;

    let optionItems = dogs.map((dog) =>
      <li key={dog} value={dog} onClick={ () => { this.handleChange(dog); this.toggleList()} }>{dog}</li>
    );
    
		const { listOpen, headerTitle } = this.state;

    return (
    	<div className="flex-grid">
		    <section role="search" className="flex-grid search">
		    	<div className="col center">

		    		<div className="select" onClick={() => this.toggleList()}>
			      	<h4 className="header-title">{headerTitle}</h4>
							{listOpen
	          		? <span className="right"><i className="fas fa-angle-up"></i></span>
	          		: <span className="right"><i className="fas fa-angle-down"></i></span>
	        		}
	        	</div>
 						
	        	{listOpen && <ul className="expand" >
		        	{optionItems}
		        </ul>}
		     	</div>
		    </section>
	    	<SearchResults dogImages={this.state.dogImages} breed={this.state.breed} />
     	</div>	
    );
  }
}

export default SearchBar;
