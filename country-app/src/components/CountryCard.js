import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function CountryCard() {
  const [countries, setCountries] = useState([]);  
  
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


return (
  <Container className="mt-4">
    <Row className="justify-content-center mb-3">
    {countries.map(country => {
      return (
        
          <Col className="col-lg-4 col-md-6 col-sm-12">
            <Card className="shadow mx-auto mb-5" style={{ width: '18rem', height:'24rem'}} key={country.name} >
              <Card.Img variant="top" src={country.flag} alt={country.name + " flag"} />
              <Card.Body className="row d-flex align-items-center">
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>
                  <span className="text-decoration-underline">Capital</span>{": " + country.capital}
                </Card.Text>
                <Button variant="outline-primary" className="shadow letter-space">
                  Show details
                </Button>
              </Card.Body>
            </Card>
          </Col> 
        
      )
    })}
    </Row>
  </Container>
);
};

export default CountryCard;

