import React from 'react';

// const Card = ({name, email, id}) => {     ---  Can also be used in line 5
// const { name, email, id } = props;     --- Can also be used in line 7
// In above usages there should be no props.name, it should be name

const Card = ({ name, email, id }) => {

  return(
    <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={ `https://robohash.org/${id}?size=200x200` } alt="! Not found"></img>
      <div>
        <h4>{ name }</h4>
        <p>{ email }</p>
      </div>
    </div>
  );
}

export default Card;
