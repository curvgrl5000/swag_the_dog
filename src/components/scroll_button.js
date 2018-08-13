import React, { Component } from 'react';

class ScrollButton extends Component {
	constructor() {
		super(); 
 		this.state = { 
 		 intervalId: 0,
     visibility: 'hidden', 
     opacity: 0
 		};
	}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if(window.pageYOffset > 200 ) {
      console.log('scrolled');
      this.setState({ visibility: 'visible', opacity: 1 });
    } 
    else {
      this.setState({
        visibility: 'hidden', opacity: 0
      });
    }
  }  

scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
    return (
      <button id="tipTop" title='Back to top' className='scroll' 
        style={{ 
            transition: 'opacity .3s ease',
            opacity: this.state.opacity,
            display: this.state.display
        }} 
        onClick={ () => { this.scrollToTop() } }>
        <span><i className="fas fa-angle-up"></i></span>
      </button>
   );
  }  
} 

export default ScrollButton;
