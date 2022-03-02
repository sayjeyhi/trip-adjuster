import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../Header';
import Footer from '../Footer';
import DestinationCard from './../DestinationCard';

import des3 from '../../assets/images/Destination-3.jpeg';

import { StarCurvedIcon, LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledDestinationsWrapper, StyledContentWrapper } from './style';

const Destinations = () => {

    const [showMore, setShowMore] = useState(false);
    const { Text, Title } = Typography;

    const handleShowMore = (e) => {
        e.preventDefault();
        setShowMore(!showMore);
    }

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
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