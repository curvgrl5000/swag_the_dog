import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Footer from './components/footer';
import registerServiceWorker from './registerServiceWorker';

import './style/style.css';

class App extends Component {
	constructor(props) {
 		super(props);
 		this.state = { 
 			dogs: [],
 			dogImages: [],
 		};
	}

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => this.setState({ dogs: Object.keys(data.message) }));
  }

  render() {
  	// const { dogs } = this.state;
    
    return (
      <div>
	      <div id="top-shape"></div>
	      <header role="banner" className="flex-grid">
	        	<div className="col">
            <a className="link link--swagger" href="/" data-letters="SWAG">SWAG</a>
            <i className="fas fa-bone"></i>
	        	</div>
	      </header>
	      <SearchBar state={this.state} />
	      <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

