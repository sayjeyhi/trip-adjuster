import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography, Avatar } from 'antd';
import avatar from '../../assets/images/avatar.jpeg';
import { BellOIcon } from '@iconbox/fa4';
import { ArrowIosBackOutlineIcon } from '@iconbox/eva'; 

import { StyledHeaderWrapper,
         StyledUserName, 
         StyledNotification, 
         StyledIconWrapper,
        } from './style';

const Header = ({type,title}) => {
    const { Title } = Typography;
    return (
      <StyledHeaderWrapper>
        {type === 'profile' ?
        <>
          <Avatar src={avatar} style={{ width: 40, height: 40 }} />
          <StyledUserName>
            <Title level={5}>Welcome back!</Title>
            <Title level={4}>Mahsa Mesbah</Title>
          </StyledUserName>
        </>
          :
        <>
          <StyledIconWrapper>
            <ArrowIosBackOutlineIcon />
          </StyledIconWrapper>
          <StyledUserName className="flexGrow">
            <Title level={4}>{title}</Title>
          </StyledUserName>
        </>
        }
        <StyledNotification className={type === 'profile' && 'flexGrow'}>
          <StyledIconWrapper>
            <BellOIcon />
          </StyledIconWrapper>
        </StyledNotification>
      </StyledHeaderWrapper>
    );
}
Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
}

export default Header;