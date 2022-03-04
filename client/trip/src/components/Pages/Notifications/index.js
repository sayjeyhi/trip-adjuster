import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';

import { CheckmarkCircle2OutlineIcon } from '@iconbox/eva'; 

import { useQuery } from "@apollo/client";

import { getNotificationsQuery } from '../../queries/index';

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { StyledDestinationsWrapper, StyledNotificationsWrapper } from './style';

const Notifications = () => {

    const [notifications, setNotifications] = useState([]);
    const { loading, error, data } = useQuery(getNotificationsQuery);    
    const { Title, Text } = Typography;

    useEffect(() => {
      if (!loading) {
        setNotifications(data.notifications);
      }
  
    },[loading]);

    return (
    <>
      <Row className="ant-row ant-row-center">
        <Col span={10}>
          <StyledDestinationsWrapper>
            <Header type="Notifications" title="Notifications" link="/" />
            <StyledNotificationsWrapper>
              {notifications ? notifications.map((item,index) => (
                <ul key={index}>
                  <li>
                    <Title level={5}>
                      {<CheckmarkCircle2OutlineIcon size={2} />} {item.title}
                    </Title>
                  <Text>{item.time}</Text>
                  </li>
                </ul> 
              ))
              : 
              <Title level={5} >There is'nt any Notification now</Title>
              }
            </StyledNotificationsWrapper>
            <Footer />
          </StyledDestinationsWrapper>
        </Col>
      </Row>
    </>
    );
}

export default Notifications;