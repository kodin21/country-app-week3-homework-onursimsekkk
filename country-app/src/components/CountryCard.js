import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function CountryCard() {
  const [countries, setCountries] = useState([]);  
  
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


return (
  <Container className="mt-4">
    {countries.map(country => {
      return (
        <Row className="justify-content-md-center mb-3">
          <Card className="shadow" style={{ width: '18rem' }} key={country.name} >
            <Card.Img variant="top" src={country.flag} alt={country.name + " flag"} />
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Text>
                {"Capital: " + country.capital}
              </Card.Text>
              <Button variant="outline-primary">
                Show details
              </Button>
            </Card.Body>
          </Card>
        </Row>
      )
    })}
  </Container>
);
};

export default CountryCard;

