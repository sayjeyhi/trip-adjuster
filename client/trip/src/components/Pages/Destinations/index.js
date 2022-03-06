import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import { useQuery } from "@apollo/client";

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import DestinationCard from './partials/DestinationCard';
import { getDestinationsQuery } from '../../queries/index';

import { StyledDestinationsWrapper, StyledContentWrapper, StyledLoadingWrapper } from './style';

const Destinations = () => {
    
  const { loading, error, data } = useQuery(getDestinationsQuery);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    } 
  },[])

  if (!loading) {
    return (
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15} >
          <StyledDestinationsWrapper>
            <Header type="Destinations" title="Destinations" />
            <StyledContentWrapper>
              {data.destinations.map(item => (
                <DestinationCard item={item} />
              ))}
            </StyledContentWrapper>
            <Footer />
          </StyledDestinationsWrapper>
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

Destinations.propTypes = {
}

export default Destinations;