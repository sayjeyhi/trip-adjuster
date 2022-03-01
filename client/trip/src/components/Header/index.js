import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, Avatar, Button } from 'antd';
import avatar from '../../assets/images/avatar.jpeg';
import { BellOIcon } from '@iconbox/fa4';
import { ArrowIosBackOutlineIcon } from '@iconbox/eva'; 

import { StyledHeaderWrapper,
         StyledUserName, 
         StyledNotification, 
         StyledIconWrapper,
        } from './style';

const Header = ({type,title,icon}) => {

    const navigate = useNavigate();
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
            <Button type="primary" shape="circle" onClick={() => navigate(-1)} icon={<ArrowIosBackOutlineIcon />} />
          </StyledIconWrapper>
          <StyledUserName className="flexGrow">
            <Title level={4}>{title}</Title>
          </StyledUserName>
        </>
        }
        {icon ?
          <StyledIconWrapper>
            <Button type="primary" shape="circle" icon={icon} />
          </StyledIconWrapper>
          :
          <StyledNotification className={type === 'profile' && 'flexGrow'}>
            <StyledIconWrapper>
              <Button type="primary" shape="circle" icon={<BellOIcon />} />
            </StyledIconWrapper>
          </StyledNotification>
        }
      </StyledHeaderWrapper>
    );
}
Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
}

export default Header;