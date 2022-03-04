import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

import { StyledDestinationsWrapper, 
        } from './style';

const Discounts = () => {

    const { Title } = Typography;

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
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