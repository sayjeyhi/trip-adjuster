import React, { useState } from 'react';
import { Row, Col, Image, Typography, Button } from 'antd';

import { GpsFIcon } from '@iconbox/jamicons';
import { MoreHorizontalFillIcon } from '@iconbox/eva'; 

import Header from '../Header';
import Footer from '../Footer';

import { StyledDestinationsWrapper, 
        } from './style';

const Discounts = () => {

    const [showMore, setShowMore] = useState(false);
    const { Text, Title } = Typography;

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledDestinationsWrapper>
            <Header type="Discounts" title="Discounts" />
            <Title level={5} >There is'nt any discount now</Title>
            <Footer />
          </StyledDestinationsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Discounts;