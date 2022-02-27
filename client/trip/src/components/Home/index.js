import React from 'react';
import { Row, Col } from 'antd';
import Header from './../Header';
import Search from './../Search';
import { StyledHomeWrapper } from './style';

const Home = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledHomeWrapper>
            <Header type="profile" title="Schedule"  />
            <Search />
          </StyledHomeWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Home;