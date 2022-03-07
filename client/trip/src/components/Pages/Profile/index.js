import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Row, Col, Input, Button, Alert, Avatar } from 'antd';
import { LogoutLightIcon } from '@iconbox/iconly'; 

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

import avatar from '../../../assets/images/avatar.jpeg';

import { StyledProfileWrapper } from './style';

const Profile = () => {

    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const { Title, Text } = Typography;

    useEffect(() => {
      const loggedIn = localStorage.getItem('loggedIn');
      const loginStatus = JSON.parse(loggedIn);
      if (!loginStatus) {
        navigate('/login');
      } 
    },[])

    const handleLogout = () => {
      localStorage.setItem('username','');
      localStorage.setItem('token','');
      localStorage.setItem('loggedIn',false);
      navigate("/login");
    }

    return (
      <Row className="ant-row ant-row-center">
        <Col xl={8} lg={10} md={15} >
          <StyledProfileWrapper>
            <Header type="Profile" title="profile" link="/" />
            <Avatar src={avatar} style={{ width: 80, height: 80 }} />
            <Title level={4}>{username}</Title>
            <Button type="default" shape="round" icon={<LogoutLightIcon size={2} />} className="logout-button" ghost={true} onClick={handleLogout} >LOG OUT</Button>
            <Footer />
          </StyledProfileWrapper>
        </Col>
      </Row>
    );
}

Profile.propTypes = {
}

export default Profile;