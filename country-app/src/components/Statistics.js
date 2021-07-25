import React from 'react';
import React, { useEffect, useState } from 'react';


const Statistics = () => {
  const [countries, setCountries] = useState([]);
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);

return (
  <Container className="mt-4">
    <Row className="justify-content-md-center mb-3">
    {countries.map(country => {
      <Card border="info" style={{ width: '18rem' }}>
          <Card.Header>{country.language}</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    })}
    </Row>
  </Container>  
  
)
};

export default Statistics;

