import React from 'react'

const Statistics = () => {
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);

return (
  <Card border="info" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Info Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
)
};

export default Statistics;
