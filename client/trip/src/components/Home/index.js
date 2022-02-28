import React from 'react';
import { Row, Col } from 'antd';

import Header from './../Header';
import Search from './../Search';
import Navbar from './../Navbar';
import CardHeader from './../CardHeader';
import DestinationItems from './../DestinationItems';

import { StyledHomeWrapper } from './style';

const Home = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledHomeWrapper>
            <Header type="profile" title="Schedule"  />
            <Search />
            <Navbar />
            <CardHeader title="Best Destination" />
            <DestinationItems />
            <CardHeader title="Recommended" />
          </StyledHomeWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Home;