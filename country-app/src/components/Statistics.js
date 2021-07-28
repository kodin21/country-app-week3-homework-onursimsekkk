import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const Statistics = () => {
  const [countries, setCountries] = useState([]);
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);

const statistic = countries.map

return (
  <Container className="mt-4">
    <Row className="justify-content-center mb-3">
    {countries.map(country => {
      return (
        <Col className="col-12 mb-4" key={country.name}>
          <Card border="info" style={{ width: '32rem' }}>
            <Card.Header>{country.name}</Card.Header>
            <Card.Body>
              <Card.Title>Info Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })}
    </Row>
  </Container>  
  
)
};

export default Statistics;

