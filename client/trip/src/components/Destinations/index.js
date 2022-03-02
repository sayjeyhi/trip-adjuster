import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../Header';
import DestinationCard from './../DestinationCard';

import des3 from '../../assets/images/Destination-3.jpeg';

import { StarCurvedIcon, LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledDestinationsWrapper, 
        } from './style';

const Details = () => {

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
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard />
          </StyledDestinationsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Details;