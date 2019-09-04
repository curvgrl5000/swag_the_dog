import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

class LightBoxMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
    this.openLightbox = this.openLightbox.bind(this);
  }
    
  openLightbox(event, obj) {
    console.log('open')
    this.setState({
      currentImage: obj.index,
      isOpen: true,
    });  
  }

  render() {
    const images = this.props.images;
    const breed = this.props.breed;
    const { photoIndex, isOpen } = this.state;
    const totalSize = this.props.dogImages.length;

    const dogList = this.props.dogImages.slice(0, 24).map((pic, i) => {
      
     if(totalSize > 0 ){ 
       document.getElementById("mini").className += "hide";
     }
     
      return (
        <li className="list-group-item" key={pic.toString()}>
          <img className="media-object" src={pic}  alt=""  key={pic} onClick={() => this.setState({ isOpen: true, photoIndex: i })} />
        </li>
      );
    });

    return (
      <div className="lightbox">
        <div className="lightbox-button">
          <button className="decorate" type="button" onClick={() => this.setState({ isOpen: true })}>
            Launch Lightbox
          </button>
        </div>
        <h1 className="breed">{breed}</h1>
        <ul className="col media-list">
          <li className="mini" id="mini"></li>
            {dogList}
        </ul>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default LightBoxMain;

