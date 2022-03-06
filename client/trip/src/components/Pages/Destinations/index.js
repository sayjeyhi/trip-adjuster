import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

import { useQuery } from "@apollo/client";

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import DestinationCard from './partials/DestinationCard';
import { getDestinationsQuery } from '../../queries/index';

import { StyledDestinationsWrapper, StyledContentWrapper, StyledLoadingWrapper } from './style';

const Destinations = () => {
    
  const { loading, error, data } = useQuery(getDestinationsQuery);
  const navigate = useNavigate();

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    } 
  },[])

  if (loading) {
    return (
      <StyledLoadingWrapper>
        <Spin indicator={antIcon} />
      </StyledLoadingWrapper>
    )
  }

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
}

Destinations.propTypes = {
}

export default Destinations;