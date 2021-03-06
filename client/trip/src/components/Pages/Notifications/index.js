import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col, Typography, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';
import { CheckmarkCircle2OutlineIcon } from '@iconbox/eva';
import { useQuery } from '@apollo/client';

import { getNotificationsQuery } from '../../queries/index';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

import {
  StyledNotificationsWrapper,
  StyledNotificationsContent,
  StyledLoadingWrapper,
} from './style';

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const { loading, data } = useQuery(getNotificationsQuery);
  const { Title, Text } = Typography;
  const { t } = useTranslation();

  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const loginStatus = JSON.parse(loggedIn);
    if (!loginStatus) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      setNotifications(data.notifications);
    }
  }, [loading]);

  if (loading) {
    return (
      <StyledLoadingWrapper>
        <Spin indicator={antIcon} />
      </StyledLoadingWrapper>
    );
  }

  return (
    <>
      {/* prettier-ignore */}
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15}>
          <StyledNotificationsWrapper>
            <Header type="Notifications" title="Notifications" link="/" />
            <StyledNotificationsContent>
              {notifications ? (
                notifications.map((item, index) => (
                  <ul key={index}>
                    <li>
                      <Title level={5}>
                        {<CheckmarkCircle2OutlineIcon size={2} />} {item.title}
                      </Title>
                      <Text>{item.time}</Text>
                    </li>
                  </ul>
                ))
              ) : (
                  <Title level={5}>{t('noNotif')}</Title>
                )}
            </StyledNotificationsContent>
            <Footer />
          </StyledNotificationsWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Notifications;
