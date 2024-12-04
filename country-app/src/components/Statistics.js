import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const Statistics = () => {
  
const [countries, setCountries] = useState([]);
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


const myLog = [];
  for (let i = 0; i < countries.length; i += 1) {
    for (let j = 0; j < countries[i].languages.length; j += 1) {
      myLog.push(countries[i].languages[j].name);
    }
  }

const counts = {};
  myLog.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  
const sortableLanguage = [];
  Object.keys(counts).forEach((language) =>
    sortableLanguage.push([language, counts[language]])
  );

  sortableLanguage.sort((a, b) => b[1] - a[1]);
  

return (
  <Container className="mt-4">
    <Row className="mb-3">
    {sortableLanguage.map(lang => {
      return (
        <Col className="col-12 mb-4" key={lang.name}>
          <Card border="primary" style={{ width: '36rem' }}>
            <Card.Header><b>{lang[0]}</b></Card.Header>
            <Card.Body>
              <Card.Title>{lang[1]} countries using this language.</Card.Title>
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

