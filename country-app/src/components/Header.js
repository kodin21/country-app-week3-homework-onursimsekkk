import React from 'react'
import Selection from './Selection';

const Header = (props) => {

  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <div>
        <Selection className="mt-5" />
      </div>
    </div>
  )
 
};

export default Header;