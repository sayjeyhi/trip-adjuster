import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Typography, Avatar, Button } from 'antd';

import { BellOIcon } from '@iconbox/fa4';
import { ArrowIosBackOutlineIcon } from '@iconbox/eva';

import avatar from '../../../assets/images/avatar.jpeg';

import {
  StyledHeaderWrapper,
  StyledUserName,
  StyledNotification,
  StyledIconWrapper,
} from './style';

const Header = ({ type, title, icon }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { Title } = Typography;
  const username = localStorage.getItem('username');
  /* prettier-ignore */
  return (
    <StyledHeaderWrapper className="header">
      {type === 'profile' ? (
        <>
          <NavLink to="/profile">
            <Avatar src={avatar} style={{ width: 40, height: 40 }} />
          </NavLink>
          <StyledUserName>
            <Title level={5}>{t('welcome')}</Title>
            <Title level={4}>{username}</Title>
          </StyledUserName>
        </>
      )
        : (
          <>
            <StyledIconWrapper>
              <Button type="primary" shape="circle" onClick={() => navigate("/")} icon={<ArrowIosBackOutlineIcon />} />
            </StyledIconWrapper>
            <StyledUserName className="flexGrow">
              <Title level={4}>{title}</Title>
            </StyledUserName>
          </>
        )
      }
      {icon ?
        <StyledIconWrapper>
          <Button type="primary" shape="circle" icon={icon} />
        </StyledIconWrapper>
        :
        <StyledNotification className={type === 'profile' && 'flexGrow'}>
          <NavLink to="/notifications" >
            <StyledIconWrapper>
              <Button type="primary" shape="circle" onClick={() => navigate("/notifications")} icon={<BellOIcon />} />
            </StyledIconWrapper>
          </NavLink>
        </StyledNotification>
      }
    </StyledHeaderWrapper>
  );
};
Header.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Header;
