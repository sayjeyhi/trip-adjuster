import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';

import { useQuery } from '@apollo/client';

import { getDestinationsQuery } from '../../queries/index';
import { DestinationProvider } from '../../context/destinationContext';
import Header from '../../Common/Header';
import Search from '../../Common/Search';
import Navbar from '../../Common/Navbar';
import des1 from '../../../assets/images/Destination-1.jpeg';
import CardHeader from '../../Common/CardHeader';
import DestinationItems from '../Destinations/partials/DestinationItems';
import RecommendedCard from '../Recommended/partials/RecommendedCard';
import Footer from '../../Common/Footer';

import { StyledHomeWrapper, StyledLoadingWrapper } from './style';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [destCards, setDestCards] = useState([]);
  const [citiesTitle, setCitiesTitle] = useState([]);
  const { loading, data } = useQuery(getDestinationsQuery);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      const cities = [];
      data.destinations.forEach((item) => cities.push(item.city));
      setCitiesTitle(cities);
      setDestinations(data.destinations);
      setDestCards(data.destinations);
    }
  }, [loading]);

  if (!loading) {
    return (
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15}>
          <DestinationProvider value={{ destinations, setDestinations, citiesTitle, destCards }}>
            <StyledHomeWrapper>
              <Header type="profile" title="Schedule" />
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
    return <StyledLoadingWrapper>{t('loading')}</StyledLoadingWrapper>;
  }
};

export default Home;
