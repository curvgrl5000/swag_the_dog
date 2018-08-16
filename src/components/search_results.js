import React from 'react';
import ScrollButton from './scroll_button';
import LightBoxMain from './lightbox_results'

const SearchResults = (props) => {
  
  const breed = props.breed;

  return (
   <section role="search" className="flex-grid results stripes">
    <LightBoxMain images={props.dogImages} dogImages={props.dogImages} breed={breed} />
    <div id="bottom-shape"></div>
    <ScrollButton scrollStepInPx="30" delayInMs="16.66"/>
   </section>
  );
}

export default SearchResults;