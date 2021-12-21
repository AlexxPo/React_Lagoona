import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import TourCard from '../containers/TourCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

export default class App extends Component {
  componentDidMount() {
    const { setTours } = this.props;
    axios.get('/tours.json').then(({ data }) => {
      setTours(data);
    });
  }

  render() {
    const { tours, isReady } = this.props;
    return (

      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={3}>
        {!isReady
          ? 'Загрузка...'
          : tours.map((tour, i) => <TourCard key={i} {...tour} />)}
        </Card.Group>
      </Container>
    )
  }
}
