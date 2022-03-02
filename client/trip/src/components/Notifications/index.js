import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../Header';
import Footer from '../Footer';
import RecommendedCard from './../RecommendedCard';

import des1 from '../../assets/images/Destination-1.jpeg';
import des2 from '../../assets/images/Destination-2.jpeg';
import des3 from '../../assets/images/Destination-3.jpeg';
import des4 from '../../assets/images/Destination-4.jpeg';
import des5 from '../../assets/images/Destination-5.jpeg';
import des6 from '../../assets/images/Destination-6.jpeg';
import des7 from '../../assets/images/Destination-7.jpeg';

import { StarCurvedIcon, LocationCurvedIcon } from '@iconbox/iconly'; 

import { StyledDestinationsWrapper, 
        } from './style';

const Notifications = () => {

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
            <Header type="Notifications" title="Notifications" />
            <Title level={5} >There is'nt any Notification now</Title>
            <Footer />
          </StyledDestinationsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Notifications;