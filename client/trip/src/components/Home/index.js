import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import { DestinationProvider } from '../context/destinationContext';

import { useQuery } from "@apollo/client";

import { getDestinationsQuery } from '../queries/index';

import des1 from '../../assets/images/Destination-1.jpeg';

import Header from './../Header';
import Search from './../Search';
import Navbar from './../Navbar';
import CardHeader from './../CardHeader';
import DestinationItems from './../DestinationItems';
import RecommendedCard from './../RecommendedCard';
import Footer from "./../Footer";

import { StyledHomeWrapper, StyledLoadingWrapper } from './style';

const Home = () => {

  const [destinations, setDestinations] = useState([]);
  const [destCards, setDestCards] = useState([]);
  const [citiesTitle, setCitiesTitle] = useState([]);
  const { loading, error, data } = useQuery(getDestinationsQuery);

  useEffect(() => {
    if (!loading) {
      const cities = [];
      const filteredArray = data.destinations.forEach(item => (
        cities.push(item.city)
      ));
      setCitiesTitle(cities);
      setDestinations(data.destinations);
      setDestCards(data.destinations);
    }

  },[loading]);

    if (!loading) {
    return (
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <DestinationProvider value={{destinations, setDestinations, citiesTitle, destCards}}>
            <StyledHomeWrapper>
              <Header type="profile" title="Schedule"  />
              <Search />
              <Navbar />
              <CardHeader title="Best Destination" link="/destinations" />
              <DestinationItems />
              <CardHeader title="Recommended" link="/recommended" />
              <RecommendedCard image={des1} title="Pantai Nusa Penida" text="12Km * 1 h 30 min" />
              <Footer title="home" />
            </StyledHomeWrapper>
          </DestinationProvider>
        </Col>
      </Row>
    );
    } else { 
      return (
      <StyledLoadingWrapper>
        loading ...
      </StyledLoadingWrapper>
    )
    }
}

export default Home;