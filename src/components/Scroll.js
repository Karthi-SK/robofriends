import React from 'react';

const Scroll = (props) => {
  // return props.children             -          returning child component (CardList)
  return(
    <div style={{ overflow: 'auto', border: '2px solid cyan', height: '750px' }}>
      { props.children }
    </div>
  );
}

export default Scroll;
