import React from 'react';
import { Row, Col, Typography } from 'antd';

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { StyledDestinationsWrapper } from './style';

const Notifications = () => {

    const { Title } = Typography;

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
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