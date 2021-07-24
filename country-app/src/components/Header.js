import React from 'react'
import Selection from './Selection';

const Header = () => {

  return (
    <div>
      <h1>
        Country App
      </h1>
      <div>
        <Selection className="mt-5" />
      </div>
    </div>
  )
 
};

export default Header;