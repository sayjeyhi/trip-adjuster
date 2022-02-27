import React from 'react';
import { Row, Col } from 'antd';
import { StyledHomeWrapper } from './style';

const Home = () => {
    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={12}>
          <StyledHomeWrapper>
            <h2>Home</h2>
          </StyledHomeWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Home;