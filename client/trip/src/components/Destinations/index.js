import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';

import Header from '../Header';
import Footer from '../Footer';
import DestinationCard from './../DestinationCard';

import { StyledDestinationsWrapper, StyledContentWrapper } from './style';

const Destinations = () => {

    const [showMore, setShowMore] = useState(false);

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledDestinationsWrapper>
            <Header type="Destinations" title="Destinations" />
            <StyledContentWrapper>
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
            </StyledContentWrapper>
            <Footer />
          </StyledDestinationsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Destinations;