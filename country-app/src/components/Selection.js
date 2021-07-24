import React from 'react'
// React Bootstrap components
import Button from 'react-bootstrap/Button';

const Selection = () => {

  return (
    <div className="mt-4 d-flex justify-content-center" >
      <Button variant="primary btn-lg" className="selection-btn">Countries </Button>
      <Button variant="primary btn-lg" className="selection-btn">Statistics </Button>
    </div>
  )
  
};

export default Selection;