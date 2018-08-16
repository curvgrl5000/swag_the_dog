import React from 'react';
import SearchListItem from './search_list_item'
import ScrollButton from './scroll_button';
import LightBoxMain from './lightbox_results'

const SearchResults = (props) => {
  
  function testing() { console.log("true"); return true };

  const dogList = props.dogImages.slice(0, 24).map((pic) => {
    return (
      <SearchListItem img={pic} key={pic} />
    );
  });
  const breed = props.breed;

  return (
   <section role="search" className="flex-grid results stripes">
    <LightBoxMain images={props.dogImages} testing={testing()} />
    
    <h1 className="breed">{breed}</h1>
      <ul className="col media-list">
        {dogList}
      </ul>
      <div id="bottom-shape"></div>
      <ScrollButton scrollStepInPx="30" delayInMs="16.66"/>
   </section>
  );
}

export default SearchResults;