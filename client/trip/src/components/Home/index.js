import React from 'react';
import { Row, Col } from 'antd';
import Header from './../Header';
import { StyledHomeWrapper } from './style';

const Home = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledHomeWrapper>
            <Header type="profile" title="Schedule"  />
          </StyledHomeWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Home;