import React from 'react';

import { Typography, Row, Col, Input, Button } from 'antd';

import CardHeader from '../CardHeader';

import { StyledLoginWrapper, StyledFormWrapper } from './style';

const Login = () => {
    const { Title } = Typography;

    return (
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledLoginWrapper>
            <Title level={3}>Login</Title>
            <StyledFormWrapper>
              <Input placeholder="username" />
              <Input placeholder="password" />
              <Button type="primary" shape="round" >Login</Button>
            </StyledFormWrapper>
          </StyledLoginWrapper>
        </Col>
      </Row>
    );
}

Login.propTypes = {
}

export default Login;