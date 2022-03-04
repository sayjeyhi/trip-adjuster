import React, { useState } from 'react';
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

  if (!loading) {
    return (
      <Row className="ant-row ant-row-center">
        <Col span={10}>
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