import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';

import Header from '../Header';
import Footer from '../Footer';
import { StyledDestinationsWrapper } from './style';

const Notifications = () => {

    const [showMore, setShowMore] = useState(false);
    const { Text, Title } = Typography;

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